var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var turn, squareId, user, computer, row, col;
var arrLength = 3;

$(document).ready(function() {
    $(".checkBox").click(function() {
        if($(this).is(":checked")) {
            user = $(this).val();
            turn = user;
            computer = (user == "X") ? "O" : "X";
        }
    });

    $(".square").click(function() {
        squareId = $(this).attr("id");
        playerMove();
        if(checkWinner()) {
            alert(turn + " wins the game!");
            resetBoard();
        } 
        if(!checkDraw()) {
            alert("It's a draw!");
        }  
    });

    $(".reset").click(function() {
        resetBoard();
    });
}); 


function playerMove() {
    if($("#"+squareId).text() == ""){
        $("#" + squareId).text(turn);
        row = getRow();
        col = getCol();
        board[row][col] = turn;
    }
    else{
        alert("Try other movement.");
    }
}

function checkDraw() {
    for(var i = 0; i < arrLength; i++) {
        for(var j = 0; j < board[i].length; j++) {
            if(board[i][j] == "") {
                return true;
            }
        }
    }
    return false;
} 

function getRow() {
    return Math.floor(squareId / arrLength);
}

function getCol() {
    return squareId % arrLength;
}

function checkWinner() {
    
    for(var i = 0; i < arrLength; i++) {
        if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2]) return true;
    } 

    for(var i = 0; i < arrLength; i++) {
        if(board[0][i] != "" && board[0][i] == board[1][i] && board[1][i] == board[2][i]) return true;
    }  

    if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return true;

    if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) return true;

    if(board[0][0] != "" && board[0][0] == board[1][0] && board[1][0] == board[2][0]) return true;

    if(board[0][1] != "" && board[0][1] == board[1][1] && board[1][1] == board[2][1]) return true;

    if(board[0][2] != "" && board[0][2] == board[1][2] && board[1][2] == board[2][2]) return true;

    return false;
}

function resetBoard() {
    document.location.reload();
}
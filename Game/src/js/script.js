var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var player, squareId, user, computer, row, col;

$(document).ready(() => {
    $(".checkBox").click(() => {
        if($(this).is(":checked")) {
            user = $(this).val();
            player = user;
            computer = (user == "X") ? "O" : "X";
        }
    });

    $(".square").click(() => {
        squareId = $(this).attr("id");
        $("#" + squareId).text(player);
        player = (player == user) ? computer : user;
    });
}); 
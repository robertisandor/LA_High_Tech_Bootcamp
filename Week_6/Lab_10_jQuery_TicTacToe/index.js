/* 
 * Complete the functions below to create a functioning tic tac toe game. 
 * Then include the script in the html file and play.
 */


$(function() {

    var squares = [],
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X";

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */

    // var wins = 

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
     
     // what exactly does it mean to assign an anonymous function to a variable?
    var startNewGame = function() {
        score = 0;
        moves = 0;
        turn = "X";
        // is this supposed to return something?
        // what is it supposed to return?
    };

    /*
     * Returns whether the given score is a winning score.
     */
    var win = function(score) {
        var multiplier = 256;
        var sum = 0;
        var winningScores = [448, 292, 273, 146, 84, 73, 56, 7];
        for (var index = 0; index < score.length; index++) {
            if (score.charAt(index) === "1") {
                sum += multiplier;
            }
            multiplier /= 2;
        }
        for (var index = 0; index < winningScores.length; index++) {
            if (sum === winningScores[index]) {
                return true;
            }
        }
        return false;
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    var set = function() {
        var clickedTDText = $(this).text();
        moves++;
        
        if (turn === "X" && clickedTDText.length === 0) {
            $(this).append("X")
            turn = "O";
            $("h3").html("Player 2's Turn");
        }
        else if (turn === "O" && clickedTDText.length === 0) {
            $(this).append("O");
            turn = "X";
            $("h3").html("Player 1's Turn");
        }

        var list = document.getElementsByTagName("td");
        var listOfXs = "";
        var listOfOs = "";
        for (var index = list.length - 1; index >= 0; index--) {
            if (list[index].innerHTML === "X") {
                listOfXs += "1";
                listOfOs += "0";
            }
            else if (list[index].innerHTML === "O") {
                listOfOs += "1";
                listOfXs += "0";
            } else {
                listOfXs += "0";
                listOfOs += "0";
            }
        }
        
        if (win(listOfXs)) {
            // how would I display that they won?
            $("h3").html("Player 1 Won!");
        } else if (win(listOfOs)) {
            $("h3").html("Player 2 Won!");
        }
    };

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    var play = function() {
        $("#tictactoe").before("<h3></h3>");
        $("#tictactoe").before("<h1>Tic Tac Toe</h1>");
        $("#tictactoe").append("<table>" +
            "<tr>" +
            "<td id=\"row1column1\"></td>" +
            "<td id=\"row1column2\"></td>" +
            "<td id=\"row1column3\"></td>" +
            "</tr>" +
            "<tr>" +
            "<td id=\"row2column1\"></td>" +
            "<td id=\"row2column2\"></td>" +
            "<td id=\"row2column3\"></td>" +
            "</tr>" +
            "<tr>" +
            "<td id=\"row3column1\"></td>" +
            "<td id=\"row3column2\"></td>" +
            "<td id=\"row3column3\"></td>" +
            "</tr>" +
            "</table>");
        // how do I make sure it doesn't change if there's something already there?
        // add a class, maybe?
        $("td").click(set);
    };

    play();
});

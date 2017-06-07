/**
 * Created by Andrew on 6/6/2017.
 */

/* Onclick event that fires it's function when user clicks on the document. It's used to add filler text in the text
field if the user doesn't enter anything into the field.*/
document.addEventListener("click", function (event) {
    var isTextBoxInside = guessTextBox.contains(event.target);

    if (!isTextBoxInside){
        if(guessTextBox.value === "") {
            guessTextBox.value = "Enter your guess...";
        }
    }
});

// Generates a random number for the player to try to guess
function randomNumber() {
    numberToGuess = Math.floor(Math.random() * (99 - 0)) + 0;
    console.log(numberToGuess);
}

// Function will clear the text from the text field
function clearTextBoxText() {
    guessTextBox.value = "";
    console.log("clear fired");
}

// Checks if player won the game and displays the results
function didPlayerWin() {
    // Need to add if to check if player won a game and clear things if so

    if(parseInt(guessTextBox.value)){
        var p = document.getElementById("playerInstruction");
        var playerGuess = parseInt(guessTextBox.value);
        p.style.color = "black";
        guessCount += 1;
        document.getElementById("guessCount").value = guessCount;
        if(playerGuess === numberToGuess)
        {
            p.innerHTML = "Congrats, You won! Play again?";
            gamesWon += 1;
            document.getElementById("playerWins").value = gamesWon;
            document.getElementById("playerAccuracy").value = (100 - guessCount) + "%";
            randomNumber();
        } else {
            if(playerGuess > numberToGuess){
                p.innerHTML = "Too High!";
            } else {
                p.innerHTML = "Too Low!";
            }
        }

    }else {
        var p = document.getElementById("playerInstruction");
        p.innerHTML = "Please insert a valid number between 0 and 99 with numberic characters only please!";
        p.style.color = "red";
    }
}

// Creates variables and assigns event listeners. Also calls the function to generate a number to guess.
var numberToGuess;
var gamesWon = 0;
var guessCount = 0;
var playerAccuracy = 0;
var guessTextBox = document.getElementById("numberGuess");
var gameSubmitButton = document.getElementById("submitButton");
guessTextBox.addEventListener("click", clearTextBoxText, false);
gameSubmitButton.addEventListener("click", didPlayerWin, false);
randomNumber();
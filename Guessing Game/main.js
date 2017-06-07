/**
 * Created by Andrew on 6/6/2017.
 */

// Function will clear the text from the text field
function clearTextBoxText() {
    guessTextBox.value = "";
    console.log("clear fired");
}

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

// Checks if player won the game and displays the results
function didPlayerWin() {
    if(parseInt(guessTextBox.value)){
        var p = document.getElementById("playerInstruction");
        p.style.color = "black";
        var playerGuess = parseInt(guessTextBox.value);
        console.log(playerGuess);
        if(playerGuess === numberToGuess)
        {
            p.innerHTML = "Congrats! You won!";
        } else {
            p.innerHTML = "Sorry! Try again.";
        }

    }else {
        var p = document.getElementById("playerInstruction");
        p.innerHTML = "Please insert a valid number between 0 and 99 with numberic characters only please!";
        p.style.color = "red";
    }
}

// Creates variables and assigns event listeners. Also calls the function to generate a number to guess.
var numberToGuess;
randomNumber();
var guessTextBox = document.getElementById("numberGuess");
var gameSubmitButton = document.getElementById("submitButton");
guessTextBox.addEventListener("click", clearTextBoxText, false);
gameSubmitButton.addEventListener("click", didPlayerWin, false);
// VARIABLES

// variables win and lose that starts at 0
var wins = 0;
var losses = 0;

// variables guesses left and guessed letters
var guessleft = 9;

// letters array 
var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// getting all the id from the index page

var winT = document.getElementById("win");
var loseT = document.getElementById("lose");
var guessleftT = document.getElementById("guessleft");
var guessT = document.getElementById("guess");

// variables from the player and computer

// var computerGuess;

// array that will be filled with function
var lettersGuessed = [];

// FUNCTION

document.onkeyup = function(event) {
    // randomizes what the computer choose
    computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
    console.log("Computer guessed: " + computerGuess)

    // declares that what the user guess is what the user types on keyboard 
    var userGuess = event.key.toLowerCase();


    // IF FUNCTION

    // if the user guess the same letter as the computer, guess left stays, the win counter goes up and lose counter stays 
    if (userGuess === computerGuess){
        guessleft = 9;
        wins++;
        lettersGuessed = [];
        // console.log(userGuess + " was correct");
        
    };
    
    // shows the win counter on page
    winT.textContent = "Wins: " + wins;

    // if the user guess wrong, guess left goes down, win counter stays, lose counter stay
    if (userGuess !== computerGuess){
        guessleft--;
        lettersGuessed.push(userGuess);
        // console.log("Player guessed " + userGuess);
        
    };

    // shows the letters on page 
    guessT.innerHTML = "Your Guesses So Far: " + lettersGuessed.join(', ');

    // if the guess left reaches zero, lose counter goes up, win counter stays 
    if (guessleft === 0) {
        losses++;
        guessleft = 9;
        lettersGuessed = [];
         
    };

    // shows the lose counter on page and show how many guesses left
    guessleftT.textContent = "Guesses Left: " + guessleft;
    loseT.textContent = "Losses: " + losses;
}






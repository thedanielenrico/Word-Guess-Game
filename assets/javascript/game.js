
// Global variables
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var wordArray = word.split('');
var rightLetter = [];
var wrongLetter = [];
var answerArray = [];
var wins = 1;
var guessesTotal = 11;
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var guessesLeft = document.getElementById("guessesLeft");

// Show letter tiles
for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
}
// for (var j = 0; j < alphabet.length; j++) {
//     var allowedLetters = alphabet[i];
// }

var remainingLetters = word.length;
var currentWord = document.getElementById("currentWord");
var usedLetters = document.getElementById("usedLetters");
var letterSpaces = document.createElement("p");
letterSpaces.textContent = answerArray.join(" ");
currentWord.appendChild(letterSpaces);
console.log(answerArray);


document.onkeyup = function (event) {
    var guess = event.key;
    while (wordArray.indexOf(guess) != -1) {
        rightLetter.push(guess);
        answerArray[wordArray.indexOf(guess)] = guess;
        wordArray[wordArray.indexOf(guess)] = '';
        letterSpaces.textContent = answerArray.join(' ');
    }
    if (rightLetter.length === word.length) {
        var winTotal = document.getElementById("winTotal");
        winTotal.textContent = ("Wins: " + wins++);
        // if word is right, restart with new word
    }
    if (!word.includes(guess)) {
        wrongLetter.push(guess);
        wrongLetters.textContent = wrongLetter.join(" ");
        guessesLeft.textContent = ("Guesses Left: " + guessesTotal--);
        // don't count letters that have already been pressed
        if (guessesTotal <= 0) {
            // stop game and restart
        }
    }
    if (!word.includes(guess) || rightLetter.length === word.length) {

    }

}


// if (key presssed is equal to a letter in the word) {
//     update letter tiles
// } else {
//     log key pressed into the used letter section;
// }
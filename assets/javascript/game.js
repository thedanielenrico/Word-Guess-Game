// =================================================================
// Global variables
// =================================================================
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship", "curse", "treasure", "map", "hook", "aye", "boom", "naval", "captain", "mate", "dolphin", "nautical", "arg", "atlantic", "pacific", "caribbean", "island", "cannon", "sword", "deck", "seahorse", "knot", "noose", "horse", "sail", "flag", "kraken", "monkey", "rum", "compass", "mermaid", "musket", "officer", "dock", "buccaneer", "clipper", "coffer", "cutlass", "fathom", "galley", "plank", "port", "starboard", "loot", "lookout", "maroon", "mutiny", "plunder", "scallywag", "seadog", "telescope", "spyglass", ];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var wordArray = "";
var rightLetter = [];
var wrongLetter = [];
var answerArray = [];
var wins = 0;
var losses = 0;
var guessesTotal = 11;
var guessesLeft = document.getElementById("guessesLeft");
var regex = /[a-zA-Z]/;
var currentWord = "";
var usedLetters = "";
var letterSpaces = "";
var oldWords = [];
var gameOver = false;

// =================================================================
// Game initialize
// =================================================================
function gameInit() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    wordArray = word.split('');
    rightLetter = [];
    wrongLetter = [];
    answerArray = [];
    guessesTotal = 11;
    remainingLetters = word.length;
    currentWord = "";
    usedLetters = "";
    letterSpaces = "";
    oldWords;
    for (var i = 0; i < word.length; i++) {
        answerArray.push("_");
    }
    document.getElementById("currentWord").textContent = answerArray.join(" ");
    document.getElementById("wrongLetters").textContent = "";
    document.getElementById("pirateDance").style.display = 'none';
    document.getElementById("guessesLeft").textContent = guessesTotal;
    document.getElementById("pirateHanging").style.display = 'none';
    document.getElementById("gallows").style.display = 'initial';
    document.getElementById("playAgain").style.display = "none";
}
// =================================================================
// Game events
// =================================================================
document.body.onload = gameInit();
document.onkeyup = function (event) {
    var guess = event.key;
    if (gameOver) {
        return
    }
    if ((guess.length == 1) && (regex.test(guess))) {
        while (wordArray.indexOf(guess) != -1) {
            rightLetter.push(guess);
            answerArray[wordArray.indexOf(guess)] = guess;
            wordArray[wordArray.indexOf(guess)] = '';
            document.getElementById("currentWord").textContent = answerArray.join(' ');
        }
        if (rightLetter.length === word.length) {
            wins++;
            oldWords = word;
            document.getElementById("winTotal").textContent = wins;
            document.getElementById("oldWords").textContent = oldWords;
            document.getElementById("pirateDance").style.display = 'initial';
            document.getElementById("gallows").style.display = 'none';
            document.getElementById("playAgain").style.display = "initial";
            document.getElementById("playAgain").onclick = function playAgain() {
                gameInit();
                gameOver = false;

            }
            gameOver = true;
        }
        if (!word.includes(guess)) {
            if (!wrongLetter.includes(guess)) {
                wrongLetter.push(guess);
                wrongLetters.textContent = wrongLetter.join(" ");
                guessesTotal--;
                oldWords = word;
                if (guessesTotal <= 0) {
                    losses++;
                    document.getElementById("lossTotal").textContent = losses;
                    document.getElementById("oldWords").textContent = oldWords;
                    document.getElementById("pirateHanging").style.display = 'initial';
                    document.getElementById("gallows").style.display = 'none';
                    document.getElementById("playAgain").style.display = "initial";
                    document.getElementById("playAgain").onclick = function playAgain() {
                        gameInit();
                        gameOver = false;
                    }
            gameOver = true;

                }
                document.getElementById("guessesLeft").textContent = guessesTotal;
            }
        }
    }
}
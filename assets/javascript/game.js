// =================================================================
// Global variables
// =================================================================
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var wordArray = "";
var rightLetter = [];
var wrongLetter = [];
var answerArray = [];
var wins = 0;
var guessesTotal = 11;
var guessesLeft = document.getElementById("guessesLeft");
var regex = /[a-zA-Z]/;
var currentWord = "";
var usedLetters = "";
var letterSpaces = "";
var oldWords = [];
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
    document.getElementById("winTotal").textContent = wins;
    document.getElementById("guessesLeft").textContent = guessesTotal;
    document.getElementById("wrongLetters").textContent = "";
    document.getElementById("oldWords").textContent = oldWords;
}
// =================================================================
// Game events
// =================================================================
document.body.onload = gameInit();
document.onkeyup = function (event) {
    var guess = event.key;
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
            gameInit();
            return

        }
        if (!word.includes(guess)) {
            if (!wrongLetter.includes(guess)) {
                wrongLetter.push(guess);
                wrongLetters.textContent = wrongLetter.join(" ");
                guessesTotal--;

                if (guessesTotal <= 0) {
                    gameInit();
                    return
                }
                document.getElementById("guessesLeft").textContent = guessesTotal;
            }
        }
        if (!word.includes(guess) || rightLetter.length === word.length) {
        }
    }
}


// Random word list
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var rightLetter = [];
var wrongLetter = [];
var answerArray = [];

// Show letter tiles
for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
}
var remainingLetters = word.length;

console.log(word);
var currentWord = document.getElementById("currentWord");
var usedLetters = document.getElementById("usedLetters");
var letterSpaces = document.createElement("p");
letterSpaces.textContent = answerArray;
currentWord.appendChild(letterSpaces);

document.onkeyup = function (event) {
    var guess = event.key;
    // letterSpaces.textContent = answerArray;
        if (word.indexOf(guess) > -1) {
            rightLetter.push(guess);
            answerArray[word.indexOf(guess)] = guess;
            letterSpaces.textContent = answerArray.join(' ');
        } else {
            wrongLetter.push(guess);
            wrongLetters.textContent = wrongLetter;
        }
}

// if (key presssed is equal to a letter in the word) {
//     update letter tiles
// } else {
//     log key pressed into the used letter section;
// }
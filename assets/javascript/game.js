
// Random word list
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Show letter tiles
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}
var remainingLetters = word.length;
for (var j = 0; j < remainingLetters.length; j++) {

}

var currentWord = document.getElementById("currentWord");
var letterSpaces = document.createElement("p");
letterSpaces.textContent = answerArray;
currentWord.appendChild(letterSpaces);
document.onkeyup = function (event) {
    var keyPressed = event.key;
    letterSpaces.textContent = answerArray;
    if (word.includes(keyPressed)) {
        letterSpaces.textContent = answerArray + keyPressed;
    }
}

// if (key presssed is equal to a letter in the word) {
//     update letter tiles
// } else {
//     log key pressed into the used letter section;
// }
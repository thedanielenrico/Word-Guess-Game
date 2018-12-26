
// Random word list
var wordList = ['ocean', 'pirate', "beach", "parrot", "ship"];
var word = wordList[Math.floor(Math.random() * wordList.length)];


var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}
// Show letter tiles
// var remainingLetters = word.length;
var currentWord = document.getElementById("currentWord");
var lettersLeft = document.createElement("p");
lettersLeft.textContent = answerArray;
currentWord.appendChild(lettersLeft);
console.log(word);



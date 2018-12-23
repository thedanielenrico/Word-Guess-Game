

// Pick a random word
var wordList = ['pirate', 'ocean', 'ship'];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// Answer Array i.e. '_''_'
var answerArray = [];
for (var i = 0; i < wordList.length; i++) {
    answerArray[i] = '_';
}
var remainingLetters = wordList.length;
console.log(remainingLetters);



var wordPara = document.createElement('p');
var wordToGuess = document.createTextNode("answerArray");
wordPara.appendChild(wordToGuess);
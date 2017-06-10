// "use strict";
// // document.onload = function(){
var games = ["Monopoly", "Bingo", "Chess", "Scrabble", "Risk", "Clue", "Apples to Apples", "Battleship", "Yahtzee", "Checkers", "Sorry", "Pictionary", "Life", "Backgammon", "Candyland", "Trouble", "Cranium", "scattegories", "Guess Who", "Taboo", "Hi Ho Cherry-O"];
var word = document.getElementById("word");
var answerArray =  [];
var badGuesses =  "";
var correctGuesses = "";
var letters;
// console.log(secretWord);

   function newGame(click) {
   	var secretWord = games[Math.floor(Math.random() * games.length)];
   	answerArray =[];
   	console.log(secretWord);
   	letters = secretWord.split("");
   		console.log(letters);
   		for (var i = 0; i < letters.length; i++) {
             answerArray[i] = "_";
             console.log(answerArray);
   	 }

   	document.getElementById("word").innerHTML = answerArray;
   	
  }

document.addEventListener("keypress", keyRelease);
function keyRelease (event){
	var n = event.key;
	console.log(n);	
	var hasMatch = false;
         for (var i = 0; i < letters.length; i++) {
             if (letters[i] === n) {
             	console.log("match");

                hasMatch = true;

                


                answerArray[i] = n;
                 document.getElementById("word").innerHTML = answerArray;


                /* if the letters match, you need to put the
                 chosenLetter into the right position in the
                 answer array */

                /*then just render everything to the page*/

            }
         }
         if (!hasMatch) {
             document.getElementById("wrongGuesses").append(n);
             console.log("The letters do not match at index");
         }
     }

		
	



//     var placeholders = "";
// //     var frag = document.createDocumentFragment();
// //     var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
// //                'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// //     var badGuesses = 0;
// //     var correctGuess = 0;
//     // var secretWord = word();
//         for (var i = 0; i < wordLength; i++) {
//         	var wordLength = secretWord.length;
	// var placeholders = "_";
    
// }
// document.getElementById("word").innerHTML = placeholders;
// }
// function getLetter(click){}
// // create an alphabet pad to select letters
// document.getElementById("letters");
// for (i = 0; i < 26; i++) {
//     var div = document.createElement('div');
//     div.style.cursor = 'pointer';
// document.getElementById("div").innerHTML = abc[i];
// //    document.addEventListener("keyup" getLetter);


// //     frag.appendChild(div);
// console.log(div);
// }
// letters.appendChild(frag);


// document.addEventListener("keypress", keyRelease);
// function keyRelease (event){
// 	var n = word.includes(event.key)
// 	if (n === true){
// 		alert("You are correct");
// console.log(n);	
// 	}
// };
// console.log(keyRelease);

        // var word = i;
        // console.log(i);
        // console.log("---------");
// var yourGuess = prompt("Please select a letter!");
// var input = random(event.key)
//   function start(event){
// console.log("the word is", word.length);
// console.log(word);
// var answerArray = [];
// for (var i = 0; i < word.length; i++)
// console.log (word);

document.addEventListener("click", newGame);




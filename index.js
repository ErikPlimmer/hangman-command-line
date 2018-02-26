let inquirer = require("inquirer");
let game = require("./wordarr.js");
let Letter = require("./letter.js");

let word = game.selectWord();
let selectedWord = word.word;
let letters = [];
for (let i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
let guessesLeft = 5;
whatDo();

function whatDo(){
  inquirer.prompt({name:"which",
              message: "Play DragonBall Z Hangman?",
              type: "list",
              choices: ["Play","QUIT"]
              })
      .then(function(d){
          if(d.which == "Play"){
            makeGuess();
          }
          else{
              
          }
      });

}
//recursive function that gets called as long as the word has not been guessed and there are guesses left
function makeGuess() {
  displayWord();
  inquirer.prompt({name: "letter",
                   message: "Please enter a letter:"
                  }).then(function(answer) {
    if (word.checkLetter(answer.letter, letters) == true) {
      console.log("Good job!");

    }
    else {
      guessesLeft--;
      if (guessesLeft > 0) {
        console.log("Incorrect. You have " + guessesLeft + " guesses left.");
      }
      else {
        console.log("Incorrect. Game over!");
      }
    }
    if (word.checkIfSolved(letters) == false) {
      if (guessesLeft > 0) {
        makeGuess();
      }
    }
    else {
      displayWord();
      console.log("You win!");
    }
  });
}

function displayWord() {
  let displayedWord = "";
  for (let i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}
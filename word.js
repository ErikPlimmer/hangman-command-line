
let Word = function(word) {
    this.word = word;
    this.checkLetter = function(letter, letters) {
      let letterFound = false;
      for (let i=0; i < this.word.length; i++) {
        if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
          letterFound = true;
          letters[i].showLetter();
        }
      }
      return letterFound;
    }
    this.checkIfSolved = function(letters) {
      let solved = true;
      for (let i=0; i < this.word.length; i++) {
        if (letters[i].shown == '_') {
          solved = false;
        }
      }
      return solved;
    }

}
  module.exports = Word;
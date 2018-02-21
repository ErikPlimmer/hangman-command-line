
let Letter = function(letter) {
    this.letter = letter;
    this.underscore = '_';
    this.printLetter = function() {
        return this.underscore;
    } 
    this.showLetter = function() {
        this.underscore = letter;
    }
}

module.exports = Letter;
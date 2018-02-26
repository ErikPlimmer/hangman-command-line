let Word = require("./word.js");


module.exports = {
    selectWord : function(){
        let words = ["Goku", "Vegta", "Piccolo", "Gohan", "Trunks", "Krillin"];
        let randNum = Math.floor(Math.random() * 6);
        let word = new Word(words[randNum]);
        return word;
        }    

    
};
let Word = require("./word.js");


module.exports = {
    selectWord : function(){
        let words = ["MegaMind", "The Lorax", "Lego Batman"];
        let randNum = Math.floor(Math.random() * 3);
        let word = new Word(words[randNum]);
        return word;
        }    

    
};
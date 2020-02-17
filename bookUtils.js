const fs = require('fs');
const chalk = require('chalk');

// handlers 

const addQuote = function(title, quote, author){
    let quoteObject = loadFile();

    let newQuote = {
        title: title,
        quote: quote,
        author: author
    }

    quoteObject.push(newQuote)
    saveFile(quoteObject)

}

const loadFile = function(){
    try{
        let file = fs.readFileSync('bookQuotes.json');
        let jsonFile = file.toString;
        return JSON.parse(jsonFile)
    } catch (e) {
        return []
    }
}


const saveFile = function(jsObj){
    let jsonFile = JSON.stringify(jsObj);
    fs.writeFileSync('bookQuotes.json', jsonFile);
}

module.exports = {
    addQuote: addQuote
}


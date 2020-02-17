const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

// dependecie for time functions
const moment = require('moment')

const bookUtil = require('./bookUtils.js')

// add

yargs.command({
    command: 'add',
    describe: 'add a book title, quote, author',
    builder: {
        title:{
            describe: 'book title',
            demandOption: true, 
            type: 'string'
        },
        quote: {
            describe: 'Quote',
            demandOption: true, 
            type: 'string'
        },
        author: {
            describe: 'Author',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function(argv){
        bookUtil.addQuote(argv.title, argv.quote, argv.author)
    }
})


// Date command
yargs.command({
    command: 'fromNow',
    describe: 'DDMMYY from now',
    builder:{
        date:{
            describe: 'Future Date',
            demandOption: true,
        }
    },
    handler(argv){
        let fromNow = moment(argv.date, "DDMMYYYY").fromNow();
        console.log(fromNow)
        
    }
})

console.log(yargs.argv)

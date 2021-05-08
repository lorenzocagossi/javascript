//tutti i require
const fetch = require("node-fetch")

//codice
fetch('https://www.pattilandia.it/public/245000_ItalianWords.txt')
    .then(data => {
        console.log(data.status)        
   })




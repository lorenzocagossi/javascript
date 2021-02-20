//tutti i require
const fetch = require("node-fetch")




//codice

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.userId === 4)
            .forEach(e => console.log(e.id))
    })

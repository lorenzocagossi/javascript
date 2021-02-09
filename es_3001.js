"use strict"
//tutti i require
const fetch = require("node-fetch")




//codice
/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.userId === 4)
            .forEach(e => console.log(e.id))
    })
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.id %2 !== 0)
            .forEach(e => console.log(e.id))
    })
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.title.split(" ").length %2 === 0)
            .forEach(e => console.log(e.id))
    })
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.body.length %3 === 0)
            .forEach(e => console.log(e.id))
    })
*/

let str = ""
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.title[0] === "s" || e.title[0] === "S")
            .forEach(e => str+=(e.body))
    })
    .then(string => console.log(str.replace(/\n/g,' ')))



    




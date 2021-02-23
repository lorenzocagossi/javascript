"use strict"
//tutti i require
const fetch = require("node-fetch")




//codice
const es1 = () => {
    console.log("stampo il nome del postId 1 con meno di 6 parole \n")
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.postId === 1)
            .filter(e => e.name.split(" ").length<=5)
            .forEach(e => console.log(e.name))       
    })
}

const es2 = () => {
    console.log("stampo le mail che finiscono con .com \n")
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.email[e.email.length -1]==='m' && e.email[e.email.length -2]==='o' && e.email[e.email.length -3]==='c')
            .forEach(e => console.log(e.email))  
    })
}

const es3 = () => {
    console.log("stampo solo le vocali contenute nel body dei commenti dell'user 1 \n")
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.postId === 1)
            .forEach(e => console.log(e.body.split("").filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u')))            
    })
}

const es4 = () => {
    console.log("stampo solo le lettere dispari nel body del commento #1 (in maiuscolo) \n")
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.id === 1)
            .forEach(e => console.log(e.body.toUpperCase().split("").filter((e,i) => i%2===0 )))          
    })
}

es4()


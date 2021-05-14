"use strict"
//tutti i require
const fetch = require("node-fetch")


//es1
/*
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>{
        data
            .forEach(e => console.log(e.url.substr(-6)))          
    })
*/

//es2
/*
let c=0
let n=0
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>{
        data
            .filter(e => e.albumId == 1) 
            .forEach(e => {
                for(let i=0; i<e.title.length; i++){
                    c += e.title[i].charCodeAt()
                    n++
                }
                
            }) 

    console.log(c/n) 
    //console.log(Math.floor(c/n))   
    console.log(String.fromCharCode(Math.round(c/n)))   
    })
*/

fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json())
    .then(data =>{
        let album = data.filter(e => e.id==1)[0]
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
            .then(data => {
                let photo = data.filter(e => e.albumId==1)
                
                album.photos = photo.map(e => e.url)
                console.log(album)
            })            
    })

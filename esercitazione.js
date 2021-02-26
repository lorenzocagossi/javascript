const fetch = require("node-fetch")

const accreditamento = () => {
  /*
   richiesta in post all'endpoint dell'accreditamento;
   nota bene:
   * il body e' un JSON non un oggetto di js, quindi bisogna fare sempre JSON.stringify
   * attenzione a mettere le l'header Content-Type: application/json altrimenti il 
     server non sa che gli state mandando questo tipo di dato
   * ricordare sempre di mettere i console log del resBody e il catch nella promise chain 
  */
  fetch("http://192.168.43.55:8080/accreditamento", {
      method: "post",
      body: JSON.stringify({
        nome: "Lorenzo Cagossi"
      }),
      headers: {
        "Content-Type": "application/json"
      },
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}

const response = (es,risultato) => {
    fetch(`http://192.168.43.55:8080/esercizi/${es}`, {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    }).then(res => res.json()).then(data => console.log(data))
}

const somma = (data, m=-1) => {
    let sum=0
    for(let i=0; i<data.length; i++){
        if(data[i]>m){
            sum+=data[i]
        }
    }
    return sum
}

const divisore= (n) => {
    let num=[]
    for(let i=0; i<n+1; i++){
        if(n%i===0){
            num.push(i)
        }
    }
    return num
}

let es30 = (data) => {
    let x=0
    let y=1
    let xp
    let yp
    console.log(data)
    data=data.split("")
    data.forEach(e => {
        if(e=="\n"){
            y++
            x=0
        }
        if(e=="X"){
            yp=y
            xp=x
        }
        else{
            x++
        }
    })

    let json = {"x": xp-1, "y": yp-1}
    return json
}

let es1 = (data) => {
    return data.toLowerCase()
}

let es2 = (data) => {
    return data*data
}

let es3 = (data) => {
    return data.cognome
}

let es4 = (data) => {
    return data.length
}

let es5 = (data) => {
    return data.map(e => e.toUpperCase())
}

let es6 = (data) => {
    let s=0
    data.forEach(e => s+=e)
    data=s
    return data
}

let es7 = (data) => {
    data=somma(data,5)
    return data
}

let es8 = (data) => {
    data=data.filter((e,i) => i%2===0)
    data=somma(data)
    return data
}

let es9 = (data) => {
    data=data.filter((e,i) => e%2!==0)
    data=somma(data)
    return data
}

let es10 = (data) => {
    data.sort()
    return data
}

let es11 = (data) => {
    data=data.map(e => e.toLowerCase()).sort()
    return data
}

let es12 = (data) => {
    data=data.map(e => e-1)
    return data
}

let es13 = (data) => {
    let l=[]
    for(let i=0; i<data.length; i++){
        if(i<data.length-1){
            l.push(data[i]+=data[i+1])
        }
        else{l.push(data[i])}
    }
    data=l
    return data
}

let es14 = (data) => {
    let positivi=0
    let negativi=0
    let zeri=0
    data.forEach(e => {
        if(e<0){negativi++}
        if(e===0){zeri++}
        if(e>0){positivi++}
    })
    let json={"positivi":positivi, "negativi":negativi, "zeri":zeri}
    data=json
    return data
}

let es15 = (data) => {
    let l=[]
    data.forEach(e => {
        if(e.length%2==0){
            l.push(e.toUpperCase())
        }
        else{l.push(e)}
    })
    data=l
    return data
}
let es16 = (data) => {
    let string=""
    for(let i=0; i<data.length; i++){
        if(i<data.length-1){
            string+=data[i]
            string+=" "
        }
        else{string+=data[i]}
    }
    data=string
    console.log(data)
    return data
}

let es17 = (data) =>{
    let string=""
    data.forEach(e => string+=e[e.length-1])
    data=string
    return data
}

let es18 = (data) =>{
    let string=""
    data.filter(e => e.length>4).forEach(e => string+=e[0])
    data=string
    return data
}



const consegna = (es) => {
  /*
   richiesta in post all'endpoint dell'accreditamento;
   nota bene:
   * ricordare di inserire l'header x-data: 'true' altrimenti non vengono passati i dati da elaborare
     ma solo il messaggio dell'esercizio
  */
  fetch(`http://192.168.43.55:8080/esercizi/${es}`, {
      method: "get",
      headers: {
        "x-data": "true"
      },
  })
  .then(res => res.json())
  .then(resBody => {
    console.log(resBody)
    let {data} = resBody
    //--------------------------------------------------

    //--------------------------------------------------
    response(es,es18(data))
    })
}
//accreditamento()
consegna(18)
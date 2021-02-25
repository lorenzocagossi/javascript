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
  fetch("http://192.168.0.21:8080/accreditamento", {
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
    fetch(`http://192.168.0.21:8080/esercizi/${es}`, {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    }).then(res => res.json()).then(data => console.log(data))
}

const somma = (data) => {
    let sum=0
    for(let i=0; i<data.length; i++){
        if(data[i]>-1){
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


const consegna = (es) => {
  /*
   richiesta in post all'endpoint dell'accreditamento;
   nota bene:
   * ricordare di inserire l'header x-data: 'true' altrimenti non vengono passati i dati da elaborare
     ma solo il messaggio dell'esercizio
  */
  fetch(`http://192.168.0.21:8080/esercizi/${es}`, {
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
    console.log(json)
    //--------------------------------------------------
    response(es,json)
    })
}

accreditamento()
consegna(30)
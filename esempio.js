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
  fetch("http://192.168.1.231:8080/accreditamento", {
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
    fetch(`http://192.168.1.231:8080/esercizi/${es}`, {
      method: "post",
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        "Content-Type": "application/json"
      }  
    }).then(res => res.json()).then(data => console.log(data))
}

const consegna = (es) => {
  /*
   richiesta in post all'endpoint dell'accreditamento;
   nota bene:
   * ricordare di inserire l'header x-data: 'true' altrimenti non vengono passati i dati da elaborare
     ma solo il messaggio dell'esercizio
  */
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res => res.json())
     .then(data =>{
         data
             .forEach(e => e=e.url.substr(-6))
             
      response(es,data)
     })
}



consegna(3)
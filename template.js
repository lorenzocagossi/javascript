const fetch = require('node-fetch')

const fakeApiRequest = async (target) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${target}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const accreditamento = () => {
  fetch('http://localhost:8080/accreditamento', {
    method: 'post',
    body: JSON.stringify({
      nome: 'Lorenzo Cagossi'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((resBody) => console.log(resBody))
    .catch((err) => console.log(err))
}

const sendRes = async (es, risultato) => {
  try {
    const res = await fetch(`http://localhost:8080/esercizi/${es}`, {
      method: 'post',
      body: JSON.stringify({
        data: risultato
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const sendReq = async (es) => {
  try {
    const res = await fetch(`http://localhost:8080/esercizi/${es}`, {
      method: 'get',
      headers: {
        'x-data': 'true'
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const consegna = async (es) => {
  const dataBruno = await sendReq(es)
  const photosData = await fakeApiRequest('photos')
  const albumData = await fakeApiRequest('albums')
  const postsData = await fakeApiRequest('posts')
  const commentsData = await fakeApiRequest('comments')
  //----------------------------------------------------------------

  const userId = 1

  const album = albumData.filter((album) => album.userId === userId)
  console.log(album)

  //-----------------------------------------------------------------
  sendRes(es, risultato)
}

accreditamento()
consegna()
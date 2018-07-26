const fetch = require('node-fetch')

// fetch('https://randomuser.me/api/')
//   .then((resp) => {
//     return resp.json()
//   })
//   .then(function (json) {
//     console.log(json)
//   })
//   .catch(function (err) {
//     console.error(`This be da error: ${err}`)
//   })

fetch('https://pointing-poker-class-2018.firebaseio.com/users.json')
  .then(resp => resp.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(new Error(err)))
  .then(() => { console.log('apple sauce') })

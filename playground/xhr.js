const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function reqListener () {
  var data = JSON.parse(this.responseText)
  console.log(data)
}

const reqError = (err) => {
  console.log('This is an error: ', err)
}

const req = new XMLHttpRequest()
req.onload = reqListener
req.onerror = reqError
req.open('get', 'https://www.randomuser.me/api/', true)
req.send()

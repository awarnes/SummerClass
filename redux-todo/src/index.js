import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <App />
  ,
  document.getElementById('root')
)

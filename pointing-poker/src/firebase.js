import firebase from 'firebase'
import API_KEY from './secrets/secrets'

const config = {
  apiKey: API_KEY,
  authDomain: 'pointing-poker-class-2018.firebaseapp.com',
  databaseURL: 'https://pointing-poker-class-2018.firebaseio.com',
  projectId: 'pointing-poker-class-2018'
}

const fireApp = firebase.initializeApp(config)

export default fireApp

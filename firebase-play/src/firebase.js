import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAhMjLLdqf0Kd6JeVnFIzb3BqJo-ckmuPQ",
  authDomain: "fir-play-5abaf.firebaseapp.com",
  databaseURL: "https://fir-play-5abaf.firebaseio.com",
  projectId: "fir-play-5abaf",
  storageBucket: "",
  messagingSenderId: "33391883133"
}

const fireApp = firebase.initializeApp(config);

export default fireApp

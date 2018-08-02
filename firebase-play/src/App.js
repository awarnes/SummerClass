import React, { Component } from 'react';
import fireApp from './firebase'
import './App.css';

const database = fireApp.database()

class App extends Component {

  componentDidMount () {
    this.getDataOnce()
  }

  getDataOnce = () => {
    database.ref('users/').once('value')
      .then(snapshot => console.error(snapshot.val()))
  }

  handleClick = () => {
    const dataRef = database.ref('users/')
    const pushingData = dataRef.push()
    pushingData.set({
        "points": "",
        "name": "Bork",
        "isPlayer": false,
        "hasVoted": false
    })
    .then(() => this.getDataOnce())
  }

  render() {
    return (
      <div >
        <button
          onClick={this.handleClick}
        >Click Me!</button>
      </div>
    );
  }
}

export default App;

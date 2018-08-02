import React, { Component } from 'react'
import { TextField, Card, CardHeader } from '@material-ui/core'
import ButtonGrid from './ButtonGrid'
import PlayerList from './PlayerList'
import fireApp from '../firebase'
import firebase from 'firebase'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      descriptionText: '',
      players: {},
      userActive: false,
      userName: '',
      activePlayer: ''
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user && this.state.userName) {
        fireApp.database().ref(`users/${user.uid}`).set({
          points: '',
          name: this.state.userName
        })
          .then(() => fireApp.database().ref('users/').once('value'))
          .then(snapshot => snapshot.val())
          .then(data => {
            this.setState({
              players: data,
              userActive: true,
              activePlayer: user.uid 
            })
          })
          .catch((err) => console.error("This is error: ", Error(err)))
      } else if (user) {
        fireApp.database().ref('users/').once('value')
          .then(snapshot => snapshot.val())
          .then(data => {
            this.setState({
              players: data,
              userActive: true,
              activePlayer: user.uid 
            })
          })
          .catch((err) => console.error("This is error: ", Error(err)))
      }
    })

    fireApp.database().ref('users/').on('value', this.updatePlayers)
  }

  componentWillUnmount () {
    fireApp.database().ref('users/').off(this.updatePlayers)
  }

  updatePlayers = (snapshot) => {
    this.setState({
      players: snapshot.val()
    })
  }

  authUser = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => firebase.auth().signInAnonymously())
    .catch(err => console.error(Error(err)))
  }

  signOut = () => {
    const {activePlayer} = this.state
    firebase.auth().currentUser.delete()
      .then((snapshot) => {
        this.setState({
          userActive: false,
          userName: '',
          activePlayer: '',
        })
      })
      .then(() => {
        return fireApp.database().ref('users/' + activePlayer).remove()
      })
      
      .catch(err => console.error(Error(err)))
  }

  updateDescription = (evt) => {
    this.setState({descriptionText: evt.target.value})
  }

  updatePoints = (points) => {
    const editPlayers = Object.entries(this.state.players).map(player => {
      if (player[0] === this.state.activePlayer) {
        player[1].points = points
      }
      return player
    })

    var newPlayers = Object.assign(...editPlayers.map(player => {
      return { [player[0]]: player[1] }
    }))
    
    fireApp.database().ref(`users/${this.state.activePlayer}/points`).set({
      points
    })
  }

  updateUserName = (evt) => {
    this.setState({userName: evt.target.value})
  }

  render () {
    const { descriptionText, userActive, userName, activePlayer, players } = this.state
    return (
      <div>
        {userActive ?
          <div>
            <div>
              <Card>
                <CardHeader
                  title={players[activePlayer].name}
                />
                <TextField
                  rows={2}
                  label='Story Description'
                  multiline
                  value={descriptionText}
                  onChange={this.updateDescription}
                />
              </Card>
              <button onClick={this.signOut}>SIGN OUT</button>
              <div>
                <div>
                  <ButtonGrid
                    updatePoints={this.updatePoints}
                  />
                </div>
                <div>
                  <PlayerList players={this.state.players}/>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1>Statistics</h1>
                <p>Total Time:</p>
                <p>Average:</p>
                <p>Breakdown:</p>
              </div>
              <div>
                <button>Show Votes</button>
                <button>Clear Votes</button>
              </div>
            </div>
          </div>
        :
          <div>
            <TextField
                  label='Enter name'
                  value={userName}
                  onChange={this.updateUserName}
                />
            <button
              onClick={this.authUser}
            >Join Session</button>
          </div>
        }
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { TextField, Card, CardHeader } from '@material-ui/core'
import ButtonGrid from './ButtonGrid'
import PlayerList from './PlayerList'
import fireApp from '../firebase'
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
    fireApp.auth().onAuthStateChanged(user => {
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
  }

  authUser = () => {
    fireApp.auth().signInAnonymously()
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

    this.setState({players: newPlayers})
  }

  updateUserName = (evt) => {
    this.setState({userName: evt.target.value})
  }

  render () {
    const { descriptionText, userActive, userName, activePlayer } = this.state

    return (
      <div>
        {userActive ?
          <div>
            <div>
              <Card>
                <CardHeader
                  title={this.state.players[activePlayer].name}
                />
                <TextField
                  rows={2}
                  label='Story Description'
                  multiline
                  value={descriptionText}
                  onChange={this.updateDescription}
                />
              </Card>
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

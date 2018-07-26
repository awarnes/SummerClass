import React, { Component } from 'react'
import { TextField, Card, CardHeader } from '@material-ui/core'
import ButtonGrid from './ButtonGrid'
import PlayerList from './PlayerList'
import { jwtClient } from './auth'

const FIREBASE_ENDPOINT = 'https://pointing-poker-class-2018.firebaseio.com'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      descriptionText: '',
      players: [{
          points: '',
          name: 'Garth',
          isPlayer: true,
          hasVoted: false
        }] 
    }
  }

  componentDidMount () {
    fetch(`${FIREBASE_ENDPOINT}/users.json`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState({players: json})
      })
      .catch(err => console.error("This is error: ", Error(err)))

      jwtClient.authorize(((err, tokens) => {
        if (err) {
          throw new Error(err)
        } else if (tokens.access_token === null) {
          throw new Error("Y'all don't have access!")
        } else {
          const accessToken = tokens.access_token
        }
      }))
  }

  updateDescription = (evt) => {
    this.setState({descriptionText: evt.target.value})
  }

  updatePoints = (points) => {
    const newPlayers = this.state.players.map(player => {
      if(player.isPlayer) {
        player.points = points
        player.hasVoted = true
      }
      return player
    })
    this.setState({players: newPlayers})
  }

  render () {
    const { descriptionText } = this.state

    return (
      <div>
        <div>
          <Card>
            <CardHeader
              title="Name Go Here"
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
              <p>Player 1: {this.state.players[0].points}</p>
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
    )
  }
}

export default App

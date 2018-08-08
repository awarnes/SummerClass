import React, {Component} from 'react'
import {TextField, Card, CardHeader} from '@material-ui/core'
import ButtonGrid from './ButtonGrid'
import PlayerList from './PlayerList'
import PropTypes from 'prop-types'
import fireApp from '../firebase'

class Game extends Component {
  componentWillUnmount () {
    fireApp.database().ref('users/').off(this.updatePlayers)
  }

  render () {
    const {
      descriptionText,
      activeUid,
      players,
      showVotes,
      updateDescription,
      updatePoints,
      showVotesFunc,
      clearVotes,
      signOut } = this.props
    return (
      <div>
        <div>
          <Card>
            <CardHeader
              title={players[activeUid].name}
            />
            <TextField
              rows={2}
              label='Story Description'
              multiline
              value={descriptionText}
              onChange={updateDescription}
            />
          </Card>
          <div>
            <div>
              <ButtonGrid
                updatePoints={updatePoints}
              />
            </div>
            <div>
              <PlayerList
                players={players}
                activeUid={activeUid}
                showVotes={showVotes}
              />
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={showVotesFunc}
          >Show Votes</button>
          <button onClick={clearVotes}>End times draw nigh!</button>
          <button onClick={signOut}>SIGN OUT</button>
        </div>
      </div>
    )
  }
}

export default Game

Game.propTypes = {
  descriptionText: PropTypes.string.isRequired,
  activeUid: PropTypes.string.isRequired,
  players: PropTypes.object.isRequired,
  showVotes: PropTypes.bool.isRequired,
  updatePoints: PropTypes.func.isRequired,
  updateDescription: PropTypes.func.isRequired,
  showVotesFunc: PropTypes.func.isRequired,
  clearVotes: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
}

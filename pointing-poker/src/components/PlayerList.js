import React, { Component } from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody
} from '@material-ui/core'

class PlayerList extends Component {
  render () {
    const players = Object.entries(this.props.players).map(player => {
      return (
        <Player
          key={player[0]}
          player={player[1]}
          activeUid={this.props.activeUid === player[0] || this.props.showVotes}
        />
      )
    })
    return (
      <Table>
        <TableBody>
          {players}
        </TableBody>
      </Table>
    )
  }
}

export default PlayerList

PlayerList.propTypes = {
  players: PropTypes.object.isRequired,
  activeUid: PropTypes.string.isRequired,
  showVotes: PropTypes.bool.isRequired
}

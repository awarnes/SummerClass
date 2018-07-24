import React, { Component } from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody
} from '@material-ui/core'

class PlayerList extends Component {
  render () {
    const players = this.props.players.map(player => {
      return (
        <Player
          key={`${player.points}${player.name}`}
          player={player}
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
  players: PropTypes.array.isRequired
}

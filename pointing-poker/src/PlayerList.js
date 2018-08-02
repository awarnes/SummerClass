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
  players: PropTypes.object.isRequired
}

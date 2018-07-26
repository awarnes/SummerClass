import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableCell
} from '@material-ui/core'
import {
  Cake,
  Wc
} from '@material-ui/icons'

class Player extends Component {
  render () {
    const { hasVoted, name, points, isPlayer } = this.props.player
    return (
      <TableRow>
        <TableCell>
          {
            hasVoted
              ? <Cake />
              : <Wc />
          }
        </TableCell>
        <TableCell>
          {name}
        </TableCell>
        <TableCell>
          {isPlayer && points}
        </TableCell>
      </TableRow>
    )
  }
}

export default Player

Player.propTypes = {
  player: PropTypes.object.isRequired
}

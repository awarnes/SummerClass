import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableCell,
  Icon
} from '@material-ui/core'

class Player extends Component {
  render () {
    const { hasVoted, name, points, isPlayer } = this.props.player
    return (
      <TableRow>
        <TableCell>
          {
            hasVoted
              ? <Icon color='primary'>duck</Icon>
              : <Icon color='error'>emoticon-poop</Icon>
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

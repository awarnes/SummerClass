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
    const { name, points } = this.props.player
    return (
      <TableRow>
        <TableCell>
          {
            points
              ? <Cake />
              : <Wc />
          }
        </TableCell>
        <TableCell>
          {name}
        </TableCell>
        <TableCell>
          {this.props.activeUid ? points : 'No Points for You!'}
        </TableCell>
      </TableRow>
    )
  }
}

export default Player

Player.propTypes = {
  player: PropTypes.object.isRequired,
  activeUid: PropTypes.bool.isRequired
}

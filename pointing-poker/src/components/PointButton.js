import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

class PointButton extends Component {
  render () {
    const { points, updatePoints } = this.props
    return (
      <Button
        size='small'
        type='button'
        onClick={() => { updatePoints(points) }}
      >{points} points</Button>
    )
  }
}

export default PointButton

PointButton.propTypes = {
  points: PropTypes.string.isRequired,
  updatePoints: PropTypes.func.isRequired
}

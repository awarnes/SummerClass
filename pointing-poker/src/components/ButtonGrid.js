import React, { Component } from 'react'
import PointButton from './PointButton'
import PropTypes from 'prop-types'

class ButtonGrid extends Component {
  render () {
    const pointValues = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?']

    const pointButtons = pointValues.map(value => {
      return (
        <td key={value}>
          <PointButton
            points={value}
            updatePoints={this.props.updatePoints}
          />
        </td>
      )
    })
    return (
      <table>
        <tbody>
          <tr>
            {pointButtons.slice(0, 4)}
          </tr>
          <tr>
            {pointButtons.slice(4, 8)}
          </tr>
          <tr>
            {pointButtons.slice(8, 12)}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ButtonGrid

ButtonGrid.propTypes = {
  updatePoints: PropTypes.func.isRequired
}

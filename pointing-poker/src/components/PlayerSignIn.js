import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TextField, Button} from '@material-ui/core'

class PlayerSignIn extends Component {
  render () {
    return (
      <div>
        <TextField
          id='userNameField'
          label='Enter name'
          value={this.props.userName}
          onChange={this.props.updateUserName}
        />
        <Button
          onClick={this.props.authUser}
          variant="outlined"
        >Join Session</Button>
      </div>
    )
  }
}

export default PlayerSignIn

PlayerSignIn.propTypes = {
  userName: PropTypes.string.isRequired,
  updateUserName: PropTypes.func.isRequired,
  authUser: PropTypes.func.isRequired
}

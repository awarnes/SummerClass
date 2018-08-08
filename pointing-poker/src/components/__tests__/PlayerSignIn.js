import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import PlayerSignIn from '../PlayerSignIn'
import { TextField } from '@material-ui/core'

const updateUserName = jest.fn()
const authUser = jest.fn()

const props = {
  userName: 'AppleSauce',
  updateUserName,
  authUser
}

describe('PlayerSignIn component', () => {
  let wrapper

  beforeEach(() => {
    const shallow = createShallow()
    wrapper = shallow(<PlayerSignIn {...props}/>)
  })

  it('renders a text field', () => {
    const textField = <TextField label='Enter name'
      value={props.userName}
      onChange={props.updateUserName}/>

    expect(wrapper.contains(textField)).toBe(true)
  })

  it('calls the authUser function when the button is clicked', () => {
    const button = wrapper.find('#authButton')

    expect(props.authUser.mock.calls.length).toBe(0)
    console.error(props.authUser.mock)
    button.simulate('click')
    console.error(props.authUser.mock)
    expect(props.authUser.mock.calls.length).toBe(1)
  })
})

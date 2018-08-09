import React from 'react'
// import { shallow } from 'enzyme'
import { createShallow } from '@material-ui/core/test-utils'
import { TextField, Button } from '@material-ui/core'
import PlayerSignIn from '../PlayerSignIn'

describe('<PlayerSignIn />', () => {
  let wrapper, shallow, props
  beforeAll(() => {
    shallow = createShallow()
  })
  beforeEach(() => {
    props = {
      userName: '',
      updateUserName: jest.fn(),
      authUser: jest.fn()
    }
    wrapper = shallow(<PlayerSignIn {...props}/>)
  })
  describe('renders', () => {
    it('a TextField', () => {
      const textField = <TextField
        id='userNameField'
        label='Enter name'
        value={props.userName}
        onChange={props.updateUserName}
      />

      expect(wrapper.contains(textField)).toBe(true)
    })

    it('a Button', () => {
      const button = <Button
        onClick={props.authUser}
        variant="outlined"
      >Join Session</Button>

      expect(wrapper.contains(button)).toBe(true)
    })
  })

  describe('calls', () => {
    it('updateUserName when TextField is typed into', () => {
      const textField = wrapper.find('#userNameField')

      expect(props.updateUserName.mock.calls.length).toBe(0)

      textField.simulate('change', {target: {value: 'Peter'}})

      expect(props.updateUserName.mock.calls.length).toBe(1)
    })
    it('updateUserName with the correct event', () => {
      const textField = wrapper.find('#userNameField')
      textField.simulate('change', 'apple')
      expect(props.updateUserName.mock.calls[0][0]).toEqual('apple')
    })
    it('Check if authUser function is called', () => {
      const button = wrapper.find(Button)
      console.log(button)
      expect(props.authUser.mock.calls.length).toBe(0)
      button.simulate('click')

      expect(props.authUser.mock.calls.length).toBe(1)
      console.log(props.authUser.mock.calls)
    })
  })
})

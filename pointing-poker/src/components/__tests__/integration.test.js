import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import App from '../App'

describe('Integration Tests: ', () => {
  let wrapper
  beforeEach(() => {
    const mount = createMount()
    wrapper = mount(<App />)
  })

  it('updates state when PlayerSignIn TextField is typed in', () => {
    expect(wrapper.state().userName).toEqual('')

    const textField = wrapper.find('#userNameField').first()

    textField.simulate('change', {target: {value: 'apple'}})

    expect(wrapper.state().userName).toEqual('apple')
  })
})

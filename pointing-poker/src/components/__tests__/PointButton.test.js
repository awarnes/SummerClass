import React from 'react'
// import { shallow } from 'enzyme'
import { createShallow } from '@material-ui/core/test-utils'
import { Button } from '@material-ui/core'
import PointButton from '../PointButton'

const props = {
  points: '13',
  updatePoints: jest.fn()
}

describe('<PointButton />', () => {
  it('renders a button', () => {
    const shallow = createShallow()
    const wrapper = shallow(<PointButton {...props}/>)
    const button = wrapper.find(Button)
    console.log(button)
    expect(wrapper.contains(button)).toBe(true)
  })
})

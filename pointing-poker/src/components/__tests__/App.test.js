import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

it('renders without crashing', () => {
  shallow(<App />)
})

it('updatesDescriptionText correctly', () => {
  const wrapper = shallow(<App />)
  const app = wrapper.instance()
  const newState = {target: {value: 'paul'}}

  expect(app.state.descriptionText).toEqual('')

  app.updateDescription(newState)

  expect(app.state.descriptionText).toEqual('paul')
})

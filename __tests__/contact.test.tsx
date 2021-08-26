import React from 'react'
import renderer from 'react-test-renderer'
import Contact from '../pages/contact/index'

it('renders about unchanged', () => {
  const tree = renderer.create(<Contact />).toJSON()
  expect(tree).toMatchSnapshot()
})
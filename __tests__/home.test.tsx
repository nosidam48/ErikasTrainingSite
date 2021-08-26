import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../pages/home/index'

it('renders about unchanged', () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})
import React from 'react'
import renderer from 'react-test-renderer'
import Services from '../pages/services/index'

it('renders about unchanged', () => {
  const tree = renderer.create(<Services />).toJSON()
  expect(tree).toMatchSnapshot()
})
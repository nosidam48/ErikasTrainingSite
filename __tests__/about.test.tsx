import React from 'react';
import renderer from 'react-test-renderer';
import About from '../pages/about/index';

it('renders about unchanged', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});

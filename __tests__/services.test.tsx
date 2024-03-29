import React from 'react';
import renderer from 'react-test-renderer';
import Services from '../pages/services/index';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => (
    <children.type {...children.props} href={href} />
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

it('renders about unchanged', () => {
  const tree = renderer.create(<Services />).toJSON();
  expect(tree).toMatchSnapshot();
});

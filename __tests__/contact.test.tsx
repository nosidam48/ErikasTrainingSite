import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../pages/contact';

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

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {
      service: 'single',
    },
  })),
}));

it('renders about unchanged', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

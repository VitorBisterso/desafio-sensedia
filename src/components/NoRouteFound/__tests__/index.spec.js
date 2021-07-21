import React from 'react';
import renderer from 'react-test-renderer';

import NoRouteFound from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/anything',
  }),
}));

it('renders correctly', () => {
  const tree = renderer.create(<NoRouteFound />).toJSON();
  expect(tree).toMatchSnapshot();
});

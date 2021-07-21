import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

import User from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/user',
  }),
}));

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <User />
      </HashRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

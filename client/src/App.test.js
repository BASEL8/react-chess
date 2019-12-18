import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Lobby from './components/Lobby';
import { ExpansionPanelActions } from '@material-ui/core';

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Lobby text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders table", () => {
  const { getByTestId, getByText } = render(<Lobby text="Hello!" />);
  expect(getByTestId('table')).toHaveTextContent('Hello!');
})
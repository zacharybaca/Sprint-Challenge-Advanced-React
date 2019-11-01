import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('PlayerCard is rendering', () => {
  const playerCard = rtl.render(<Player />);
  expect(playerCard.getByText(/player name/i));
}); 

test('renders without crashing', () => {
  render(<App />);
});

test('PlayerCard is rendering', () => {
  const playerCard = rtl.render(<Player />);
  expect(playerCard.getByText(/country/i));
})
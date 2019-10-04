import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('PlayerCard is rendering', () => {
  const playerCard = rtl.render(<Player />);
  expect(playerCard.getByText(/player name/i));
}); 

it('renders without crashing', () => {
  render(<App />);
});

it('PlayerCard is rendering', () => {
  const playerCard = rtl.render(<Player />);
  expect(playerCard.getByText(/country/i));
})
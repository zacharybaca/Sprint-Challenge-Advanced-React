import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Player from './components/player';
import { useServer } from './hooks/serverhook';
import './App.css';



class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log(response.data);
        this.setState({ players: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
          {this.state.players.map(players => <Player players={players} />)}
      </div>
    )
  }
}

export default App;

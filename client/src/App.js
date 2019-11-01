import React from 'react';
import axios from 'axios';
import Player from './components/player';
import Email from './components/Email';
import NavBar from './components/NavBar';




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
          <NavBar />
          <Email />
          {this.state.players.map(players => <Player players={players} />)}
      </div>
    )
  }
}

export default App;

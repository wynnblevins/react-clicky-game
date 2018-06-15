import React, { Component } from 'react';
import './App.css';
import GuitarGameBoard from './components/gameBoard';

class App extends Component {
  render() {
    let guitars = [
      { name: 'Stratocaster', image: './images/stratocaster_rsz.png', hasBeenClicked: false }, 
      { name: 'SG', image: './images/sg_rsz.png', hasBeenClicked: false },
      { name: 'Les Paul', image: './images/lesPaul_rsz.png', hasBeenClicked: false },
      { name: 'ES-335', image: './images/es335_rsz.png', hasBeenClicked: false },
      { name: 'Explorer', image: './images/explorer_rsz.png', hasBeenClicked: false },
      { name: 'Flying V', image: './images/flyingv_rsz.png', hasBeenClicked: false },
      { name: 'Ovation', image: './images/ovation_rsz.png', hasBeenClicked: false },
      { name: 'Martin D', image: './images/martind_rsz.png', hasBeenClicked: false },
      { name: 'Taylor', image: './images/taylor_rsz.png', hasBeenClicked: false },
      { name: 'Telecaster', image: './images/tele_rsz.png', hasBeenClicked: false },
      { name: 'Warlock', image: './images/warlock_rsz.png', hasBeenClicked: false },
      { name: 'PRS', image: './images/prs_rsz.png', hasBeenClicked: false },
      { name: 'js2410', image: './images/js2410_rsz.png', hasBeenClicked: false },
      { name: 'jemjr', image: './images/jemjr_rsz.png', hasBeenClicked: false },
      { name: 'Jackson V', image: './images/jacksonv_rsz.png', hasBeenClicked: false },
      { name: 'g5420', image: './images/g5420_rsz.png', hasBeenClicked: false }
    ];
    
    return (
      <div className="App">
        <GuitarGameBoard guitars={guitars}></GuitarGameBoard>
      </div>
    );
  }
}

export default App;

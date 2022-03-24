import React, { Component } from 'react';
import Movies from './Movies';
import Nav from './Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <main className='App'>
        <nav>RANCID TOMATILLOS NAV</nav> //component Nav will be here
      </main>
    )
  }
}

export default App;

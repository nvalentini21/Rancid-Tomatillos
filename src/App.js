import React, { Component } from 'react';
import Movies from './Movies';
import Nav from './Nav';
import movieData from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    console.log(this.state.movies)
    return (
      <main className='App'>
        <nav>RANCID TOMATILLOS NAV</nav> //component Nav will be here
      </main>
    )
  }
}

export default App;

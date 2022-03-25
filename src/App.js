import React, { Component } from 'react';
import Movies from './Movies';
import Movie from './Movie';
import Nav from './Nav';
import movieData from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie:'',
    }
  }


setSingleMovie = (id) => {
  const singleMovie2 = this.state.movies.find(movie => movie.id === id)
  this.setState({singleMovie: singleMovie2})
  console.log(this.state.singleMovie)
}

showAllMovies = () => {
  this.setState({singleMovie: ''})
}

  render() {
    return (
      <main className='App'>
        <Nav showAllMovies={this.showAllMovies}/>
        {this.state.singleMovie ? <Movie movie={this.state.singleMovie}/> :
        <Movies movies={this.state.movies} setSingleMovie={this.setSingleMovie}/> }
      </main>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Movies from './Movies';
import Movie from './Movie';
import Nav from './Nav';
import movieData from './data';
import fetchCalls from './apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      singleMovieId:'',
      singleMovie:'',
      error: '',
    }
  }

componentDidMount = () => {
  console.log('MOUNT')
  fetchCalls.fetchData('movies')
    .then(data => {
      this.setState({movies: data.movies})
    })
    if (this.state.singleMovieId && !this.state.singleMovie) {
      fetchCalls.fetchData(`movies/${this.state.singleMovieId}`)
      .then(data => {
        this.setState({singleMovie: data.movie})
      })
    }
  }

  componentDidUpdate = () => {
    console.log('update')
    if (this.state.singleMovieId && !this.state.singleMovie) {
      fetchCalls.fetchData(`movies/${this.state.singleMovieId}`)
      .then(data => {
        this.setState({singleMovie: data.movie})
      })
    }
  }

setSingleMovie = (id) => {
  const singleMovie2 = this.state.movies.find(movie => movie.id === id)
  this.setState({singleMovieId: singleMovie2.id})
}

showAllMovies = () => {
  this.setState({singleMovie: ''})
  this.setState({singleMovieId: ''})
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

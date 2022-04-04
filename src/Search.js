import React, { Component } from 'react';
import fetchCalls from './apiCalls'
import Card from './Card';
import './Search.css'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies:[],
      movieCards: null,
      search: ''
    }
  }

  componentDidMount = () => {
    fetchCalls.fetchData('movies')
      .then(data => {
        this.setState({allMovies: data.movies})
      })
    }

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, this.searchMovie(event));
}

 clearInputs = () => {
   this.setState({search:''})
 }

 searchMovie = event => {
   event.preventDefault()
   const searchedMovies = this.state.allMovies.filter(movie => {
     return movie.title.toLowerCase().includes(this.state.search.toLowerCase())
   })
   this.setState({filteredMovies:searchedMovies}, this.getMovieCards)
 }

 getMovieCards = () => {
   const movieCards = this.state.filteredMovies.map(movie => {
     return (
       <Card
         id={movie.id}
         key={movie.id}
         poster={movie.poster_path}
         backdrop={movie.backdrop_path}
         rating={movie.average_rating}
         release_date={movie.release_date}
         title={movie.title}
       />
     )
   })
   this.setState({movieCards: movieCards})
 }

  render() {
    console.log(this.state.movieCards)
    return (
      <div className="search-page">
        <form className="search-form">
          <label> Begin typing to filter: </label>
          <input
            type='text'
            placeholder='enter movie'
            name='search'
            value={this.state.search}
            onChange={event => this.handleChange(event)}
          />
        </form>
        {this.state.movieCards &&
          <div className = 'movies-search-display'>
          <h2></h2>
          <div className='movies-search-container'>
            {this.state.movieCards}
          </div>
        </div> }

      </div>
    )
  }
}

export default Search;

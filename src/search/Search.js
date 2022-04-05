import React, { Component } from 'react';
import fetchCalls from '../common/apiCalls'
import Card from '../common/Card';
import './Search.css'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      filteredMovies:[],
      movieCards: null,
      search: '',
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

  clearInputs = event => {
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
       />
     )
   })
   this.setState({movieCards: movieCards})
 }

  render() {
    return (
      <div className="search-page">
        {this.state.error && <div>{this.state.error}</div>}
        <form className="search-form">
          <label> Begin typing to search: </label>
          <input
            type='text'
            placeholder='movie title'
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

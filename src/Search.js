import React, { Component } from 'react';
import fetchCalls from './apiCalls'
import Card from './Card';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: props.allMovies,
      filteredMovies:[],
      search: ''
    }
  }

// componentDidMount = () => {
//   fetchCalls.fetchData(`movies`)
//   .then(data => {
//     console.log(data.movies)
//       this.setState({allMovies: data.movies})
//   })
// }

componentDidUpdate = () => {
}

handleChange = event => {
   this.setState({ [event.target.name]: event.target.value }, this.searchMovie(event));
 }

 clearInputs = (event) => {
   this.setState({search:''})
 }

 searchMovie = event => {
   event.preventDefault()
   const searchedMovies = this.state.allMovies.filter(movie => {
     return movie.title.toLowerCase().includes(this.state.search.toLowerCase())
   })
   this.setState({filteredMovies:searchedMovies})
   console.log(this.state.filteredMovies)
 }

  render() {
    return (
      <div className="search-page">
        <form className="search-form">
          <label> Enter Title: </label>
          <input
            type='text'
            placeholder='enter movie'
            name='search'
            value={this.state.search}
            onChange={event => this.handleChange(event)}
          />
        <button onSubmit={event => this.searchMovie(event)}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;

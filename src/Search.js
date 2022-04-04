import React, { Component } from 'react';
import fetchCalls from './apiCalls'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies:[],
    }
  }

componentDidMount = () => {
  fetchCalls.fetchData(`movies/${this.state.movieID}`)
  .then(data => {
    this.setState({filteredMovies: data.movie})
  })
}

  render() {
    return (

    )
  }
}

export default Search;

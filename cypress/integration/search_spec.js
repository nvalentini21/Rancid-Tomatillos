import React, { Component } from 'react';
import fetchCalls from './apiCalls'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID:props.id,
      singleMovie:'',
    }
  }

componentDidMount = () => {
  fetchCalls.fetchData(`movies/${this.state.movieID}`)
  .then(data => {
    this.setState({singleMovie: data.movie})
  })
}

  renderReleaseDate = () => {
    const releaseDateObj =  new Date(this.state.singleMovie.release_date)
    const releaseDate = releaseDateObj.toString().split(' ').slice(1, 4).join(' ')
    return releaseDate
  }

  renderGenres = () => {
    if (this.state.singleMovie.genres) {
      const genres = this.state.singleMovie.genres.join(', ')
      return genres
    }
  }

  renderRating = () => {
    if (this.state.singleMovie.average_rating){
      const rating = this.state.singleMovie.average_rating.toFixed(1)
      return rating
    }
  }

  renderRevenue = () => {
    if (this.state.singleMovie.revenue && this.state.singleMovie.revenue > 0){
      return `$ ${this.state.singleMovie.revenue.toString()}.00`
    } else {
      return `Not available.`
    }
  }

  renderBudget = () => {
    if (this.state.singleMovie.budget && this.state.singleMovie.budget > 0){
      return `$ ${this.state.singleMovie.budget.toString()}.00`
    } else {
      return `Not available.`
    }
  }

  renderTagline = () => {
    if (this.state.singleMovie.tagline){
      return this.state.singleMovie.tagline
    }
  }

  render() {
    return (

    )
  }
}

export default Movie;

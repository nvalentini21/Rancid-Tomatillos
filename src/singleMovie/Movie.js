import React, { Component } from 'react';
import fetchCalls from '../common/apiCalls'
import './Movie.css'

class Movie extends Component {
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
      <div className='single-movie' style={{
      backgroundImage: `url(${this.state.singleMovie.backdrop_path})`
    }}>
        <div className='poster-div'>
          <h1>{this.state.singleMovie.title}</h1>
          <p className='runtime'>Runtime: {this.state.singleMovie.runtime} minutes </p>
          <p className = 'release'>Date Released: {this.renderReleaseDate()}</p>
          <img src={this.state.singleMovie.poster_path} alt="Movie poster" width="275px" height="auto" position="fixed"/>
          <p className="tagline">{this.renderTagline()}</p>
        </div>
        <div className='description-div'>
          <h3 className='genres'>Genres: {this.renderGenres()}</h3>
          <h4 className ='overview-title'>Overview:</h4>
          <p className = 'overview-summary'>{this.state.singleMovie.overview}</p>
          <p className="average-rating">Average Rating: {this.renderRating()} / 10</p>
          <p className="revenue">Revenue: {this.renderRevenue()}</p>
          <p className="budget"> Budget: {this.renderBudget()}</p>
        </div>
      </div>
    )
  }
}

export default Movie;

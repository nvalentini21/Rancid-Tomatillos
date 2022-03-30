import React, { Component } from 'react';
import fetchCalls from './apiCalls'
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
  console.log('MOVIEMOUNT')
  fetchCalls.fetchData(`movies/${this.state.movieID}`)
  .then(data => {
    this.setState({singleMovie: data.movie})
  })
  }

  renderReleaseDate = () => {
    const releaseDateObj =  new Date(this.state.singleMovie.release_date)
    const releaseDate = (releaseDateObj.toString().split(' ').slice(1, 4).join(' '))
    return releaseDate
  }

  // const genres = movie.genres.join(', ')
  // const rating = movie.average_rating.toFixed(2)

  render() {
    return (
      <div className='single-movie' style={{
      backgroundImage: `url(${this.state.singleMovie.backdrop_path})`
    }}>
        <div className='poster-div'>
          <h1>{this.state.singleMovie.title}</h1>
          <p>Runtime: {this.state.singleMovie.runtime} minutes </p>
          <p>Date Released: {this.renderReleaseDate()}</p>
          <img src={this.state.singleMovie.poster_path} alt="Movie poster" width="95%" height="auto"/>
        </div>
        <div className='description-div'>
          <h3>Genres:</h3>
          <h4>Overview:</h4>
          <p>{this.state.singleMovie.overview}</p>
          <p>Average Rating:</p>
        </div>
      </div>
    )
  }
}



export default Movie;

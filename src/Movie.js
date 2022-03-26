import React from 'react';
import './Movie.css'

const Movie= ({movie}) => {

const releaseDateObj = new Date(movie.release_date)
const releaseDate = (releaseDateObj.toString().split(' ').slice(1, 4).join(' '))
const genres = movie.genres.join(', ')
const rating = movie.average_rating.toFixed(2)

  return (
    <div className='single-movie'>
      <div className='poster-div'>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.runtime} minutes </p>
        <p>Date Released: {releaseDate}</p>
        <img src={movie.poster_path} alt="Movie poster" width="95%" height="auto"/>
      </div>
      <div className='description-div'>
        <h3>Genres: {genres}</h3>
        <h4>Overview:</h4>
        <p>{movie.overview}</p>
        <p>Average Rating: {rating}</p>
      </div>
    </div>
  )
}



export default Movie;

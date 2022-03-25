import React from 'react';
import './Movie.css'

const Movie= ({movie}) => {
  return (
    <div className='single-movie'>
      <div className='poster-div'>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <img src={movie.poster_path} alt="Movie poster" width="350" height="500"/>
      </div>
      <div className='description-div'>
        <h3>Genre List Here</h3>
        <p>Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</p>
      </div>
    </div>
  )
}



export default Movie;

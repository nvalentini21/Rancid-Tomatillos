import React from 'react';
import Card from '../common/Card';
import './Movies.css';

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <Card
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
      />
    )
  })

  return (
    <div className = 'movies-display'>
      <h2 className ='movie-header'>All Movies</h2>
      <div className='movies-container'>
        {movieCards}
      </div>
    </div>
  )
}

export default Movies;

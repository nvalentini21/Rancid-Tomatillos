import React from 'react';
import Card from './Card';
import './Movies.css';

const Movies = ({movies, setSingleMovie}) => {
  const movieCards = movies.map(movie => {
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
  return (
    <div className = 'movies-display'>
      <h2>All Movies</h2>
      <div className='movies-container'>
        {movieCards}
      </div>
    </div>
  )
}

export default Movies;

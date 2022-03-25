import React from 'react';

const Movie= ({movie}) => {
  return (
    <div className='single-movie'>
      <h3>{movie.title}</h3>
    </div>
  )
}



export default Movie;

import React from 'react';
import './Card.css'

const Card = ({poster, backdrop, rating, release_date, title, id, setSingleMovie}) => {
  return (
    <div className='movie-card' cursor="pointer" onClick={() => setSingleMovie(id)}>
      <img src={poster} alt="Movie poster" width="200"/>
    </div>
  )
}



export default Card;

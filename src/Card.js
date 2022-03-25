import React from 'react';
import './Card.css'

const Card = ({poster, backdrop, rating, release_date, title}) => {
  return (
    <div className='movie-card' onClick={() => console.log({title})}>
      <h3>{title}</h3>
      <img src={poster} alt="Movie poster" width="200"/>
    </div>
  )
}



export default Card;

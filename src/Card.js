import React from 'react';
import './Card.css'
import { Route, NavLink} from 'react-router-dom';

const Card = ({poster, backdrop, rating, release_date, title, id, setSingleMovie}) => {
  return (
    <NavLink to={`movies/${id}`}>
    <div className='movie-card'>
      <img src={poster} alt="Movie poster" width="200"/>
    </div>
    </NavLink>
  )
}



export default Card;

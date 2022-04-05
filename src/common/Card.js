import React from 'react';
import './Card.css'
import { Route, NavLink} from 'react-router-dom';

const Card = ({poster, id}) => {
  return (
    <NavLink to={`movies/${id}`}>
    <div className='movie-card'>
      <img src={poster} alt="Movie poster" width="100%"/>
    </div>
    </NavLink>
  )
}

export default Card;

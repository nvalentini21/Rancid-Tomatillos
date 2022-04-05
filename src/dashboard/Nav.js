import React from 'react';
import './Nav.css'
import { Router, NavLink } from 'react-router-dom';

const Nav= ({movie, showAllMovies}) => {
  return (
    <nav className='navigation'>
      <h1 className='title'>RANCID TOMATILLOS</h1>
      <div className='nav-buttons'>
      <NavLink to='/'>
        <button className=' all-btn all-movies-btn'>All Movies</button>
      </NavLink>
      <NavLink to='/search'>
      <button className='all-movies-btn search-btn'>Search Movies</button>
      </NavLink>
      </div>
    </nav>
  )
}

export default Nav;

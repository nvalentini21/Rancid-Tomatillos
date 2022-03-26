import React from 'react';
import './Nav.css'

const Nav= ({movie, showAllMovies}) => {
  return (
    <nav className='navigation'>
      <h1 className='title'>RANCID TOMATILLOS</h1>
      <button className='all-movies-btn' onClick= {() => showAllMovies()}>All Movies</button>
      <button className='all-movies-btn'>Search Movies</button>
    </nav>
  )
}

export default Nav;

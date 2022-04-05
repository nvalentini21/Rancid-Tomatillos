
import React from 'react';
import './NoMatch.css'
import { NavLink } from 'react-router-dom';


const NoMatch= () => {
  return (
    <div className="error-page">
      <h1>404 Error</h1>
      <h2>URL Not Found.</h2>
      <NavLink to="/">Back to Main</NavLink>
    </div>
  )
}
export default NoMatch;

import React from 'react'
import './styles.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div className="navbar">
        <NavLink to="/">
          <img src="https://prismic-io.s3.amazonaws.com/cosmobots-website/a06ad421-5c55-4396-8bed-566463eeb8bc_logocosmonew-svg.svg?auto=format%2Ccompress&fit=max&q=50" />
        </NavLink>
        
      </div>
    )
}

export default Navbar

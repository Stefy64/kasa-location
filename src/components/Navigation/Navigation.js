import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
      <header>
        <div className='navBar-container'>
          <div>
          <img className='navBar-logo' src=''  alt="logo kasa" />
          </div>
          <nav>
          <ul className='navBar-menu'>
            <NavLink to="/">
              <li>Accueil</li>  
            </NavLink>
            <NavLink to="/About">
              <li>A propos</li>
            </NavLink>
          </ul> 
          </nav>   
        </div>
      </header>  )  
}

export default Navigation
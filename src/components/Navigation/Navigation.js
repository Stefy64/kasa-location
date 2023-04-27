import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/NavbarLogo.svg';
import './Navigation.css';

function Navigation () {
    return (
      <header>
        <div className='navBar-container'>
          <div>
          <img className='navBar-logo' src={Logo}  alt="logo kasa" />
          </div>
          <nav>
          <ul className='navBar-menu'>
            <NavLink to="/">
              <li>Accueil</li>  
            </NavLink>
            <NavLink to="/About">
              <li>A Propos</li>
            </NavLink>
          </ul> 
          </nav>   
        </div>
      </header>  )  
}

export default Navigation
import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from "../../Assets/logo_kasa.svg"  // Change Logo to logo and remove Header(logo)

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>
      <div className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </header>
  )
}

export default Header

import React, { useState } from 'react'
import logo from '../assets/icons_assets/Logo.svg'

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" id="logo">
        <img src={logo} alt="logo" />
      </a>

      {/* mobile navbar */}
      <button className='menu-icon' onClick={toggleMenu}>&#9776;
      </button>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>

    </nav>


    )
}

export default Nav;

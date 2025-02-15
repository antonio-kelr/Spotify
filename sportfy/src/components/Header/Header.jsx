import React from 'react'
import logoSportfy  from '../../assets/logo/spotify-logo.png'
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Link  to="/">
      <img src={logoSportfy} alt="" />
      </Link>

      <Link to="/"  className='header_link'>
        <h1>Sportfiy</h1>
      </Link>
    </header>
  )
}

export default Header
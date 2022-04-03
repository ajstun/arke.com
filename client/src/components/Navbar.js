import React from 'react'

import "./sass/navbar.scss"

import logo from '../images/logo_aj_dark.svg'

import { Link } from 'react-router-dom'





const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <Link className='navbarLinkBg' to="/arke">Arke</Link>

        <Link to="/">
          <img className='navbarLogo'src={logo}></img>
        </Link>

        <Link className='navbarLinkBg' to="/masters">Masters</Link>



    </div>
  )
}

export default Navbar
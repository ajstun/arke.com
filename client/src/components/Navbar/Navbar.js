import React, { useState } from 'react'

import "../sass/navbar.scss"

import logo from '../../images/logo_aj_dark.svg'

import { Link } from 'react-router-dom'
import Arke from '../../pages/Arke'
import Navbar2 from './Navbar2'





const Navbar = () => {
  

  

  return (
    <div className='navbarContainer'>
        <Link title='01' className='navbarLinkBg' to="/arke">Arke</Link>

        <Link to="/">
          <img className='navbarLogo'src={logo}></img>
        </Link>

        <Link title='02' className='navbarLinkBg' to="/masters">Masters</Link>

        

    </div>
  )
}


export default Navbar
import React from 'react'
import Navbar from './components/Navbar'
import NavbarManager from './components/NavbarManager'

import "./components/sass/navbar.scss"


const App = () => {
  return (
    <div>
        <NavbarManager />
        <h1>Hey, A</h1>
        <p>A Fresh, New React Boiler-Plate to create a phenomenal website
            1
        </p>
    </div>
  )
}

export default App
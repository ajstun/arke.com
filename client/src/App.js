import React from 'react'
import Gallery from './components/Gallery/Gallery'
import NavbarManager from './components/Navbar/NavbarManager'

import Screenshot from './images/Screenshot.png'

import "./app.scss"


//GET data from 'mongo' & ranging those examples as <Gallery id="", etc />



const App = () => {
  return (
    <div className='appContainer'>
        <NavbarManager/>
        <Gallery id="01" img={Screenshot} name="theverge" fLink="#" btsLink="#" vLink="#"/>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
    </div>
  )
}

export default App
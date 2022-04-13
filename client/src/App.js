import React from 'react'
import Gallery from './components/Gallery/Gallery'
import NavbarManager from './components/Navbar/NavbarManager'



const App = () => {
  return (
    <div className='appContainer'>
        <NavbarManager />
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
    </div>
  )
}

export default App
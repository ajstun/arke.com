import React from 'react'
import Gallery from './components/Gallery/Gallery'
import NavbarManager from './components/Navbar/NavbarManager'

import "./app.scss"


const navbar2Items = 
[
  { id: "1", name: "PORTFOLIO", link: "/", style: { fontWeight: 'bold'}},
  { id: "2", name: "TECH STACK", link: "/tech_stack", style: { fontWeight: 'normal'}},
  { id: "3", name: "GITHUB", link: "/github", style: { fontWeight: 'normal'}},
  
]


const App = () => {
  return (
    <div className='appContainer'>
        <NavbarManager importLinks={navbar2Items}/>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
    </div>
  )
}

export default App
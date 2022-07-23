import React from 'react'

import NavbarManager from '../components/Navbar/NavbarManager'

const Arke = () => {

  const navbar2Items = 
  [
    { id: "1", name: "PORTFOLIO", link: "/portfolio"},
    { id: "2", name: "TECH STACK", link: "/tech_stack"},
    { id: "3", name: "GITHUB", link: "/github"},
    
  ]

  return (
    <div>
        <NavbarManager />
        <Slideview />
        
    </div>
  )
}




export default Arke
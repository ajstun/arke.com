import React from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import NavbarManager from '../components/NavbarManager'

const Arke = () => {

  const navbar2Items = 
  [
    { id: "1", name: "PORTFOLIO", link: "/portfolio"},
    { id: "2", name: "TECH STACK", link: "/tech_stack"},
    { id: "3", name: "GITHUB", link: "/github"},
    
  ]

  return (
    <div>
        <NavbarManager importLinks={navbar2Items} />
        
    </div>
  )
}




export default Arke
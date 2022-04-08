import React from 'react'
import Navbar from '../components/Navbar'
import NavbarManager from '../components/NavbarManager'

const Masters = () => {


  const navbar2Items = 
  [
    { id: "1", name: "PORTFOLIO", link: "/portfolio"},
    { id: "2", name: "TECH STACK", link: "/tech_stack"},
    { id: "3", name: "GITHUB", link: "/github"},
    
  ]

  return (
    <div>
        <NavbarManager importLinks={navbar2Items} />
        This is Masters
    </div>
  )
}

export default Masters
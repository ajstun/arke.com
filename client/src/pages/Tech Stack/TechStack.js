import React from 'react'
import NavbarManager from '../../components/Navbar/NavbarManager'

import "./techstack.scss"



  
const navbar2Items = 
[
  { id: "1", name: "PORTFOLIO", link: "/", style: { fontWeight: 'normal'}},
  { id: "2", name: "TECH STACK", link: "/tech_stack", style: { fontWeight: 'bold'}},
  { id: "3", name: "GITHUB", link: "/contact", style: { fontWeight: 'normal'}},
  
]


const TechStack = () => {
  return (
    <div className='appContainer'>
        <NavbarManager importLinks={navbar2Items}/>
        
       
    </div>
  )
}



export default TechStack
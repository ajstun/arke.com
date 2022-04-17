import React from 'react'
import NavbarManager from '../../components/Navbar/NavbarManager'



  
const navbar2Items = 
[
  { id: "1", name: "PORTFOLIO", link: "/", style: { fontWeight: 'normal'}},
  { id: "2", name: "TECH STACK", link: "/tech_stack", style: { fontWeight: 'normal'}},
  { id: "3", name: "GITHUB", link: "/contact", style: { fontWeight: 'bold'}},
  
]


const Contact = () => {
  return (
    <div className='appContainer'>
        <NavbarManager importLinks={navbar2Items}/>
        
       
    </div>
  )
}



export default Contact
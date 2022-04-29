import React from 'react'
import NavbarManager from '../../components/Navbar/NavbarManager'
import SGallery from '../../components/Stack-Gallery/SGallery'

import "./techstack.scss"



  
const navbar2Items = 
[
  { id: "1", name: "PORTFOLIO", link: "/", style: { fontWeight: 'normal'}},
  { id: "2", name: "TECH STACK", link: "/tech_stack", style: { fontWeight: 'bold'}},
  { id: "3", name: "GITHUB", link: "/contact", style: { fontWeight: 'normal'}},
  
]


const frontend = [
  { 
    id:"01", 
    name:"React", 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
  },

  { 
    id:"02", 
    name:"Webpack", 
    img: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" 
  },

  { 
    id:"03", 
    name:"Framer-Motion", 
    img: "https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png" 
  },

  {
    id: "04",
    name: "Designer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logo_AffinityDesigner.svg/1024px-Logo_AffinityDesigner.svg.png"
  },

  { 
    id:"05", 
    name:"React", 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
  },

  { 
    id:"06", 
    name:"Webpack", 
    img: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" 
  },

  { 
    id:"07", 
    name:"Framer-Motion", 
    img: "https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png" 
  },

  {
    id: "08",
    name: "Designer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logo_AffinityDesigner.svg/1024px-Logo_AffinityDesigner.svg.png"
  }

]

const backend = [
  { 
    id:"01", 
    name:"React", 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
  },

  { 
    id:"02", 
    name:"Webpack", 
    img: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" 
  },

  { 
    id:"03", 
    name:"Framer-Motion", 
    img: "https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png" 
  },

  {
    id: "04",
    name: "Designer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Logo_AffinityDesigner.svg/1024px-Logo_AffinityDesigner.svg.png"
  }

]


const TechStack = () => {
  return (
    <div className='appContainer'>
        <NavbarManager importLinks={navbar2Items}/>
        <SGallery images={frontend} />
        <SGallery images={backend} />
        
        
       
    </div>
  )
}



export default TechStack
import React from 'react'
import { Link, useHref } from 'react-router-dom'

import "./navbar2.scss"

const Navbar2 = (props) => {



    return (
        <div className='navbarContainer2'>
           {props.Objects.map( (res) => {
       
            
               return (
                   
                   <Link className='navbarLinkBg2' style={{ fontWeight: res.style.fontWeight }} key={res.id} to={res.link}>{res.name}</Link>
               )
           })}
        </div>
    )

}
    
  
export default Navbar2
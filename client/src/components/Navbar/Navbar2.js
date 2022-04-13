import React from 'react'
import { Link, useHref } from 'react-router-dom'

import "../sass/navbar2.scss"

const Navbar2 = (props) => {

    return (
        <div className='navbarContainer2'>
           {props.Objects.map( (res) => {
               return (
                   <a title={res.name} className='navbarLinkBg2' key={res.id} href={res.link}>{res.name}</a>
               )
           })}
        </div>
    )

}
    
  
export default Navbar2
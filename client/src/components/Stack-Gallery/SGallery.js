import React, { useEffect, useState } from 'react'

import "./sgallery.scss"


import verge from "./Screenshot.png"




const SGallery = (props) => {



  return (
    <div className='sgalleryContainer'>
        <div className='sgallerySquare'>
          
          <div className='sgalleryThumbnailContainer' >
          
          {props.images.map( (res) => {

            return (
              <a className='sgalleryThumbnail' id={res.name}>
                <img src={res.img} id={res.name} key={res.id}></img>
              </a>
            )

          })}

          </div>

        
          

          <div className='sgalleryMenu'>

            <p id='01' className='sgalleryLink' href='#'>FRONTEND</p>
  

          </div>

        </div>

   

        
        
    </div>
  )


}



export default SGallery
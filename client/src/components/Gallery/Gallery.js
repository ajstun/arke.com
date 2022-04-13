import React from 'react'

import "./gallery.scss"


import verge from "./Screenshot.png"



const Gallery = (props) => {
  return (
    <div className='galleryContainer'>
        <div className='gallerySquare'>
          
          <div className='galleryThumbnailContainer' >
            <img className='galleryThumbnail' src={verge}></img>
          </div>
          

          <div className='galleryMenu'>
            <a id='01' className='galleryLink' href='#'>FEATURES</a>
            <a id='02' className='galleryLink' href='#'>BEHIND THE SCENES</a>
            <a id='03' className='galleryLink' href='#'>VISIT</a>
          </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default Gallery
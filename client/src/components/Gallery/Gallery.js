import React from 'react'

import { motion } from 'framer-motion'

import "./gallery.scss"


import verge from "./Screenshot.png"



const Gallery = (props) => {
  return (
    <motion.div 


      className='galleryContainer'>
        <div className='gallerySquare'>
          
          <div className='galleryThumbnailContainer' >
            <motion.img 

            initial={{ y: 60}}
            whileInView={{ y: 0 }}
            whileFocus={{ scale: 1.5 }}
            transition={{ease: "easeInOut", duration: 1, delay: 0.5}}
            
            className='galleryThumbnail' src={verge}>
            </motion.img>
          </div>
          

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, ease: "easeIn", duration: 0.7}}
          
          className='galleryMenu'>
            <a id='01' className='galleryLink' href='#'>FEATURES</a>
            <a id='02' className='galleryLink' href='#'>BEHIND THE SCENES</a>
            <a id='03' className='galleryLink' href='#'>VISIT</a>
          </motion.div>

        </div>
        <div>

        </div>
    </motion.div>
  )
}

export default Gallery
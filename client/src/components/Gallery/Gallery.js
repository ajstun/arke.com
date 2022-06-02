import React, { useEffect, useState } from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import "./gallery.scss"


import verge from "./Screenshot.png"



const Gallery = (props) => {


  console.log(`${props.fLink}/${props.name}`)

  //variant
  const variant = {
    
    visible: {opacity: 1, y:0} ,
    hidden: { opacity: 0, y:0}
  }



  let control = useAnimation()
  const [ ref, inView ] = useInView()




  useEffect( () => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <motion.div 


      className='galleryContainer'>
        <div className='gallerySquare'>
          
          <div className='galleryThumbnailContainer' >
            <motion.img 

              variants={variant}
              animate={control}
              initial={{ y: 50 }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 1  }}

              whileHover={{ opacity: 0 }}

              title={props.name}
              className='galleryThumbnail' src={props.img}>

            </motion.img>
          </div>
          

          <motion.div


            ref={ref}

            initial= "hidden"
            variants={variant}
            animate={control}
            transition={{ delay: 1.5, ease: "easeIn" }}
           
            className='galleryMenu'>

              <a id='01' className='galleryLink' href={props.fLink}>FEATURES</a>
              <a id='02' className='galleryLink' href={props.btsLink}>BEHIND THE SCENES</a>
              <a id='03' className='galleryLink' href={props.vLink}>VISIT</a>

          </motion.div>
        </div>

   

        
        
    </motion.div>
  )
}

export default Gallery
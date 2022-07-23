import React, { useEffect, useState } from 'react'


import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import "./gallery.scss"
import { Link, Switch, Router} from 'react-router-dom'

import Features from '../../pages/Portfolio/Features'


const Gallery = (props) => {



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

  const getLink = (x) => {
    if(x == "features") {
      return `/features/${props.name}`
    } else if(x == "bts") {
      return `/bts/${props.name}`
    } else throw Error
  }

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

             

                <Link to={getLink("features")} id='01' className='galleryLink'>FEATURES</Link>
                {/* <a id='01' className='galleryLink' href={props.fLink}>FEATURES</a> */}
                <Link to={getLink("bts")} id='02' className='galleryLink'>BEHIND THE SCENES</Link>
                <a id='03' className='galleryLink' href={props.vLink}>VISIT</a>

             
             

             

          </motion.div>
        </div>

   

        
        
    </motion.div>
  )
}



export default Gallery
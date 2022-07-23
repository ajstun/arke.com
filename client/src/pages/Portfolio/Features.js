import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FeaturesGallery from '../../components/Gallery/FeaturesGallery'
import NavbarManager from '../../components/Navbar/NavbarManager'


const Features = () => {

  const [load, setLoad] = useState(true)
  const [data, setData] = useState([])
  const { portfolio_name }  = useParams()

  useEffect(() => {

    if(load == true) {


     fun()
     setLoad(false)
    }
  })

  useEffect(() => {
    console.log(load)
  })

  
  async function fun() {

  

    await fetch(`http://localhost:5000/features/${portfolio_name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
        'Accept': 'application-json'
      }
    }).then((res) => { res.json()
      .then((response) => {
         let val = response[1].features
         setData(val)  
         console.log(val)        
       })
      })    
      .catch((err) => {
      console.log(err)
      })
  }
  
  return(
    <div className='appContainer'>
      <NavbarManager />
      {/* Mapping & Calling Individual FeaturesGallery Components */}
      <div className='featuresFlexContainer'>
        {data.map(x => (  
            <FeaturesGallery key={x.id} id={x.id} heading={x.heading} image_url={x.image_url} desc={x.desc} />
        ))}
      </div>
    </div>
  )
}



export default Features
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TestF from '../../components/test-features/TestF'

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
         let val = response[2].features
         setData(val)  
         console.log(val)        
       })
      })    
      .catch((err) => {
      console.log(err)
      })
  }
  
  return(
    <div> 
      <h3>Features</h3>
      {data.length > 0 ? (data.map(x => (
        console.log(x)
        
      ))) : (
        <p>No Posts</p>
      )}
    </div>
  )
   
}



export default Features
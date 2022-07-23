import React, { Component, useEffect, useState } from 'react'
import Gallery from './components/Gallery/Gallery'
import NavbarManager from './components/Navbar/NavbarManager'







//GET data from 'mongo' & ranging those examples as <Gallery id="", etc />


const App = () => {

  const [load, setLoad] = useState(true)
  const [data, setData] = useState([])
  

  async function getPortfolios() {
    await fetch("http://localhost:5000/", {
      method: "GET",
      "Content-Type":"application-json",
      "Accept":"application-json"
    }).then(res => res.json().then(data => {

      let dat  = [data][0]
      setData(dat)
      }))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    if(load) {
      getPortfolios()
      setLoad(false)
    }
    

  })

  return (
    <div className='appContainer'>
        <NavbarManager/>
        {data.length > 0 ? data.map(x => <Gallery key={x._id} name={x.portfolio_name} img={x.thumbnail_image} vLink={x.visit}/> 
        ) : <p>Loading..</p> }
      
    </div>
  )
  
}

export default App
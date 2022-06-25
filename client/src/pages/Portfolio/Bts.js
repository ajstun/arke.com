import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router'

const Bts = () => {

  const [load, setLoad] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    if(load == true) {
     fun()
     setLoad(false)
    }
  })

  
  async function fun() {

    let { portfolio_name } = useParams()
    

    await fetch(`http://localhost:5000/bts/${portfolio_name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
        'Accept': 'application-json'
      }
    }).then((res) => { res.json()
      .then((response) => {
         let val = response[2].bts
         setData(val)          
       })
      })    
      .catch((err) => {
      console.log(err)
      })
  }
  
  return(
    <div> 
      <h3>Behind the Scenes</h3>
      {data.length > 0 ? (data.map(x => (
        <TestF key={x.key} props={x} />
      ))) : (
        <p>No Posts</p>
      )}
    </div>
  )
}

export default Bts
import React from 'react'
import './slidechild.scss'

const SlideChild = (props) => {
    let importImages = props.importImages
    console.log(importImages)

    
  return (
    <div className='slideChildContainer'>
        {props.importImages.map( (res) => {
                return (
                    <div key={res.id} className='slideChildContainer2'>
                        <div style={{backgroundImage : `url(${res.img})` }} className='slideThumbnail' title={res.id}>
                        </div>
                        <h5 className='h5-slide'>{res.name}</h5>
                        <p className='p-slide'>{res.description}</p>

                    </div>
                )
            })}
     
    </div>
  )
}

export default SlideChild
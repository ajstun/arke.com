import React from 'react'

const FeaturesGallery = (props) => {
  return (
    <div className='featuresContainer'>
        <div className='featuresSquare'>
            <h3 id={props.id}>{props.heading}</h3>
            <img src={props.image_url}></img>
            <p>{props.desc}</p>
        </div>
    </div>  
  )
}

export default FeaturesGallery
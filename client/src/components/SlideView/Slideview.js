import React from 'react'

import '../sass/slideview.scss'
import SlideChild from './SlideChild'



const portfolioElements = [
    {id: "01", name: "Tasker", description: "Task Manager that works.", img: 'https://www.geeky-gadgets.com/wp-content/uploads/2021/10/the-batman-film-2022.jpg'},
    {id: "02", name: "Ikigai", description: "The Science of Fullfillment."}
]

const Slideview = () => {
  return (
    <div className='slideView'>
        <div className='slideContainer'>
            <div className='slideshow'>
                <img className='slideshowImage' src='https://www.geeky-gadgets.com/wp-content/uploads/2021/10/the-batman-film-2022.jpg'></img>
            </div>
            <h4 className='h4'>PORTFOLIO</h4>
            <div className='portfolioList'>
                <SlideChild importImages={portfolioElements}/>
            </div>
        </div>
    </div>
  )
}

export default Slideview
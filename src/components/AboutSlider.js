import React from 'react'
import './AboutSlider.css'
import photo1 from '../photos-about/mi1.jpg'
import photo2 from '../photos-about/mi2.jpg'
import photo3 from '../photos-about/mi3.jpg'
import photo4 from '../photos-about/mi4.jpg'
import { useState } from 'react'

const photos = [photo1, photo2, photo3, photo4]

function Slider() {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevImage(){
        setImageIndex(index => {
            if(index === 0) return photos.length - 1
            return index - 1
        })
    }
    function showNextImage(){
        setImageIndex(index => {
            if(index === photos.length - 1) return 0
                return index + 1
        })
    }

  return (
    <div className='slider'>
        <button className='btn-slider' onClick={showPrevImage}><i class="fa-solid fa-left-long" style={{left: 0}} ></i></button>
        <div className='slider-container'>
             <img src={photos[imageIndex]} className='slider-image' alt='cover'/>
        </div>
        <button className='btn-slider' onClick={showNextImage}  style={{right: 0}}><i class="fa-solid fa-right-long"></i></button>  
    </div>
  )
}

export default Slider
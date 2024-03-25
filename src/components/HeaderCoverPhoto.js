import React from 'react'
import background from '../photos/panorama.jpg'
import '../components/HeaderCoverPhoto.css'

function HeaderCoverPhoto() {
  return (
    <div className='home-background-container'>
     <div className='background'>
       <img src={background} alt='background' className='background-photo'/>
       <p className='background-quote'>...we like, we breathe, we live fishing...</p>
     </div>
   </div>
  )
}

export default HeaderCoverPhoto
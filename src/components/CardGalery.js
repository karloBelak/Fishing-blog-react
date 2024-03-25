import React from 'react'
import '../components/CardGalery.css'
// import photo1 from '../photos-card/kanal-gume1.jpg'
// import photo2 from '../photos-card/kanal-muhe.jpg'
// import photo3 from '../photos-card/kanal-pastrva.jpg'
// import photo4 from '../photos-card/kanal-pastrva1.jpg'
// import photo5 from '../photos-card/kanal-zima.jpg'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

    // const images = [photo1, photo2, photo3, photo4, photo5]

function CardGalery({ storyPhotos }) {
    const [modal, setModal] = useState(false)
    const [imgNum, setImgNum] = useState(0)

function openModal(index){
    setModal(true)
    setImgNum(index)
}

  return (
    <div className='galery-card'>
        <h3>Galerija slika</h3>
        <div className='card-photo-galery'>
            {
                storyPhotos.map((image, index) => {
                    return <img className='card-galery-img' alt='galery-img' src={image} key={index}
                    onClick={() => openModal(index)}/>
                })
            }
        </div>
        <AnimatePresence>
        {modal && <motion.div className='modal' 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
                  
          transition={{ duration: 0.3 }}>
                    <img  src={storyPhotos[imgNum]} alt='im' className='modal-img'/>
                    <button className='btn-close-modal' onClick={() => setModal(false)} 
                    >❌</button>
                </motion.div>}
            </AnimatePresence>
    </div>
  )
}

export default CardGalery
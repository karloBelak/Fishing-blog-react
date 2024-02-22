import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container-page'>
        <h3 className='contact-title'>Contact page</h3>
        <div className='contact-text'>
          <p>Ako vam se sviđa viđeno, imate pitanja, savjete, pritužbe i slično, javite nam se puta ovog maila ili putem naših facebook i instagram profila</p>
        </div>
        <div className='form-profils'>
          
          <form action="#" method="POST" className='form-box'>
            <label for="name">ime</label>
            <input type="text" id="name" name="name" required/>
            
            <label for="email">email</label>
            <input type="email" id="email" name="email" required/>
            
            <label for="message">poruka</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit" className='send-btn'>pošalji</button>
          </form>


          <div className='face-insta-box'>
            <h3>Zapratite nas putem društvenih mreža</h3>
            <div className='profil'>
              <p className='contact-follow-name'>Hrvoje</p>
              {/* <div className='face-insta'> */}
              <button className='btn-icons-contact'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons-contact'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
              {/* </div> */}
            </div>
            <div className='profil'>
              <p>Karlo</p>
              {/* <div className='face-insta'> */}
              <button className='btn-icons-contact'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons-contact'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
              {/* </div> */}
            </div>
            <div className='profil'>
              <p>Marko</p>
              {/* <div className='face-insta'> */}
              <button className='btn-icons-contact'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons-contact'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
              {/* </div> */}
            </div>
            <div className='profil'>
              <p>Josip</p>
              {/* <div className='face-insta'> */}
              <button className='btn-icons-contact'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons-contact'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
              {/* </div> */}
            </div>
            <div className='profil'>
              <p>Marijo</p>
              {/* <div className='face-insta'> */}
              <button className='btn-icons-contact'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons-contact'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
              {/* </div> */}
            </div>

          </div>
        </div>
    </div>
  )
}

export default Contact
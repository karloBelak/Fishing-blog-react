import React from 'react'
import '../components/Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <ul className='list-footer'>
          <p className='ul-title'>Menu</p>
          <li className='li'><NavLink to='/about' >O NAMA</NavLink>
            </li>
            <li className='li'> <NavLink to='/forum'>FORUM</NavLink></li>
            <li className='li'><NavLink to='/contact'>KONTAKT</NavLink></li>
        </ul>

        <ul className='list-footer categories'>
          <p className='ul-title '>Najnovije</p>
          <li>Stuka</li>
          <li>Saran</li>
          <li>UltraLight</li>
          <li>Ostalo</li>
        </ul>

        <div className='icons-footer'>
                <button className='btn-icons'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
            </div>
    </footer>
  )
}

export default Footer
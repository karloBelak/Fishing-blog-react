import React from 'react'
import '../components/Header.css'
import logo from '../photos/logo-fish.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'




function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function openCloseHandle(){
        setMenuOpen(!menuOpen)
        window.scrollTo({
            top: 0
          })
    }
    function closeHandle(){
        setMenuOpen(!menuOpen)
    }

    
  return (
    <>
    <nav className="navbar">
        <Link to='/' onClick={openCloseHandle}>
            <div className='left-side'>
            <img src={logo} alt='logo' className='logo'/>
            <h1 className='title'>fishing<span>Adicts</span></h1>
            </div>
        </Link>
        <ul className={menuOpen? 'open' : ''}>
            <div className='ul-list'>

            <li className='li'><NavLink to='/about' onClick={openCloseHandle}>O NAMA</NavLink>
            </li>
            <li className='li' onClick={openCloseHandle}> <NavLink to='/forum'>FORUM</NavLink></li>
            <li className='li' onClick={openCloseHandle}><NavLink to='/contact'>KONTAKT</NavLink></li>
            </div>
            <div className='icons'>
                <button className='btn-icons'>
                    <i class="fa-brands fa-facebook"></i>
                </button>
                <button className='btn-icons'>
                    <i class="fa-brands fa-instagram"></i>
                </button>
            </div>
        </ul>
      
        <button className='menu-btn' onClick={closeHandle} >
            {
                menuOpen ? 
                <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>
            }    
        </button>
          
    </nav>
   </>
  )
}

export default Header
import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'; 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6'; 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6'; 'react-icons/fa';


const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-12" src={logo} alt="" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        {/* <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareTwitter/> */}
         <a href="https://www.linkedin.com/in/alfiya07/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/alf.u.z/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.link/or7iak" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
    </div>
  </nav>
}

export default Navbar

import React from 'react'
import { IoIosContact } from "react-icons/io";
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
        <div className='nav-container'>
        
            <a className='nav-logo'>Navbar</a>

            <div className='contact-icon'>
            <div/>
            <IoIosContact />
            <div/>
            </div>

        </div>
    </nav>

  )
}

export default Navbar
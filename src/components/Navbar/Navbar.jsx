import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='text-logo'>Kyaw Lwin</h2>
        <div className='nav'>
            <ul className='nav-items'>
                <li className='nav-item active'><a href=''>Home</a></li>
                <li className='nav-item'><a href=''>About</a></li>
                <li className='nav-item'><a href=''>Projects</a></li>
                <li className='nav-item'><a href=''>Servives</a></li>
            </ul>
            <div className='contact-btn'>
                <a>Contact</a>
            </div>

        </div>
    </div>
  )
}

export default Navbar
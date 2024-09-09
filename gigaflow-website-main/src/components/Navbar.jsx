import React, { useState } from 'react';
import Logo1 from '../assets/Logo-1.png';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    const whatsappNumber = '+918903844107'; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      'Hello, I would like to get a quote for the services. Please provide more details.'
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
  };

  return (
    <header className='navbar-unique-container'>
      <nav className='navbar-unique'>
        <div className='navbar-logo-container'>
          <a href='/home' className='navbar-logo-link'>
            <img src={Logo1} alt='Logo' className='navbar-logo'/>
          </a>
        </div>
        <div className='navbar-menu-container'>
          <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <a onClick={() => handleScrollToSection('home')} href='#home'>Home</a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('about')} href='#about'>About Us</a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('services')} href='#services'>Services</a>
            </li>
            <li>
              <a onClick={() => handleScrollToSection('contact')} href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <button className='navbar-quote-btn' onClick={handleQuoteClick}>Get Quote</button>
        <div className='navbar-hamburger' onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

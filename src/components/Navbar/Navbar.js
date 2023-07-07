import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className='navbar'>
      <h3 className='logo'>Logo</h3>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <li>
          <Link to='/' className='home' onClick={() => setIsMobile(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='about' onClick={() => setIsMobile(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to='/skills' className='skills' onClick={() => setIsMobile(false)}>
            Skills
          </Link>
        </li>
      </ul>
      <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
    </nav>
  );
};

export default Navbar;

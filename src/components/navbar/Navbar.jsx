import React from 'react';
import './Navbar.scss';
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? 'navbar active' : 'navbar'}>
      <div className="wrapper">
        <div className="leftNavbar">
          <a href="#intro" className="logo">
            Mogoba
          </a>
          <div className="itemContainer">
            {/* <i class="fas fa-user fa-2x"></i> */}
            <span className="icon">+2547 255 238 20</span>
          </div>
          <div className="itemContainer">
            {/* <i class="fas fa-envelope fa-2x"></i> */}
            <span className="icon">douglasnyamwaro289@gmail.com</span>
          </div>
        </div>
        <div className="rightNavbar">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

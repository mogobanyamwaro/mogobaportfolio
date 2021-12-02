import React from 'react';
import './Menu.scss';
function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? 'menu active' : 'menu'}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Locate Me</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">My CV</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

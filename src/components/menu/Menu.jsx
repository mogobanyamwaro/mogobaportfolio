import React from 'react'
import "./Menu.scss"
function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className = {menuOpen ? 'menu active':'menu'}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
                </li>
        </ul>
        </div>
    )
}

export default Menu

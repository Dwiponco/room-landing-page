import React, { useState } from 'react'

function Navbar() {

    const [nav,setNav] = useState(false)

    const background = () => {
        if(window.scrollY >= 50){
            setNav(true)
        } else{
            setNav(false)
        }
    }

    window.addEventListener("scroll", background)

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="/" className="logo">
                <h3 style={{color:"#0998e7"}}>ROOM PANDA</h3>
            </a>
            <input type="checkbox" id="menu-btn" className="menu-btn"/>
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">UI SS</a></li>
                <li><a href="/">Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

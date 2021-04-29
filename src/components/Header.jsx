import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1><span>Launch Your App</span>With Confidence and Creative</h1>
                <p className="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam obcaecati adipisci officia voluptas quasi ut.</p>
                <a href="/" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header

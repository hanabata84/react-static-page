import React from 'react'
import ReactLogo from '../assets/logo192.png'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <img className='react-logo' src={ReactLogo} alt="" />
                <h3 className='logo-head'>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar
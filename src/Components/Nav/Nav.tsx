import React from 'react'
import './Nav.css'

function Nav() {

    const navLinks = [
        {
            name: 'Blog',
            href: '/'
        },
        {
            name: 'Changelog',
            href: '/Changelog'
        },
        {
            name: 'Documentation',
            href: '/Changelog'
        }
    ]

    return (
        <div className='nav'>
            <div className="logo">
                <img src='/Images/Logos/quickSwapLogo.png'></img>
            </div>
            <div className="linksContainer">
                {navLinks.map((link) => (
                    <a href={link.href} className="link">
                        {link.name}
                    </a>
                ))}

            </div>
            <button className='launchAppBtn'>
                Launch App
            </button>
            <img className='ham-icon' src='/Images/Icons/ham-icon.svg'></img>
        </div>
    )
}

export default Nav
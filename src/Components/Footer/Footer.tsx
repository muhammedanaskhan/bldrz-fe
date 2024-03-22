import React from 'react'
import './Footer.css'

function Footer() {

    const socialLinks = [
        {
            name: 'Twitter',
            href: 'https://twitter.com/',
            icon: '/Images/Icons/x.svg'
        },
        {
            name: 'Medium',
            href: 'https://medium.com/',
            icon: '/Images/Icons/medium.svg'
        },
        {
            name: 'Telegram',
            href: 'https://t.me/',
            icon: '/Images/Icons/telegram.svg'
        },
        {
            name: 'Discord',
            href: 'https://discord.com/',
            icon: '/Images/Icons/discord.svg'
        }
    ]

    const protocols = [
        {
            name: 'Blog',
            href: '/',
        },
        {
            name: 'Changelog',
            href: '/',
        },
        {
            name: 'Github',
            href: '/',
        },
        {
            name: 'Media kits',
            href: '/',
        }
    ]

    const resources = [
        {
            name: 'Bounty Program',
            href: '/',
        },
        {
            name: 'Documentation',
            href: '/',
        },
        {
            name: 'Support',
            href: '/',
        },
        {
            name: 'Contact',
            href: '/',
        }
    ]

    return (
        <div className='footer'>
            <div className='border'></div>
            <div className='footer-content'>
                <div className="left-desktop-div">
                    <div className='quickswap-div'>
                        <img src='/Images/Logos/quickSwapLogo.png'></img>
                        <span>Oracle Free Perpetual Volatility Trading</span>
                    </div>
                    <div className="community-div">
                        <span>Community</span>
                        <div className="community-icons">
                            {
                                socialLinks.map((link) => (
                                    <a href={link.href} className="community-icon">
                                        <img src={link.icon}></img>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='right-desktop-div'>
                    <div className="protocols-and-resources">
                        <div className="protocols-div">
                            <span>Protocol</span>
                            <div className="protocols-links">
                                {
                                    protocols.map((link) => (
                                        <a href={link.href} className="protocol-link">
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </div>

                        </div>
                        <div className="resources-div">
                            <span>Resources</span>
                            <div className="resources-links">
                                {
                                    resources.map((link) => (
                                        <a href={link.href} className="resources-link">
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </div>

                        </div>
                    </div>

                    <span className='copyright'>© 2023 GammaSwap Labs LLC.</span>
                </div>

            </div>
            <img className='footer-ellipse' src='/Images/footer-ellipse.png'></img>

        </div>
    )
}

export default Footer
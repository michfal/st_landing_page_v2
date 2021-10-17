import React from 'react'
import MobileMenu from '../mobileMenu/MobileMenu.component'
import DesktopMenu from '../desktopMenu/DesktopMenu.component'

import './navbar.scss'

import owl_icon from '../../images/icon_owl_home.svg'


const Navbar = () => {
    const width = window.screen.width;
    return (
        <nav className="navbar">
            <img className="navbar__icon" src={owl_icon} alt="owl icon"/>
            <MobileMenu />
        </nav>
    )
}

export default Navbar
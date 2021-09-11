import React from 'react'
import { Link } from 'react-scroll'
import MobileMenu from '../mobileMenu/MobileMenu.components'

import './navbar.scss'

import hamburgerIcon from '../../images/icon_hamburger.svg'
import owl_icon from '../../images/icon_owl_home.svg'







const Navbar = () => {
    return (
        <section className="navbar">
            <img className="navbar__icon" src={owl_icon} alt="owl icon"/>
            <MobileMenu />
        </section>
    )
}

export default Navbar
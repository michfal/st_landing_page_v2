import React from 'react'
import Menu from '../menu/Menu.component'
import { Link } from 'react-scroll'

import './navbar.scss'

import owl_icon from '../../images/icon_owl_home.svg'


const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__icon" src={owl_icon} alt="owl icon"/>
            <Menu />
        </nav>
    )
}

export default Navbar
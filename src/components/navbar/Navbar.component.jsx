import React from 'react'

import './navbar.scss'

import hamburgerIcon from '../../images/icon_hamburger.svg'
import owl_icon from '../../images/icon_owl_home.svg'



const MobileMenu = () => {
    return (
        <>
            <button className="navbar__button" onClick={btnClick}>
                <img className="navbar__button_icon" src={hamburgerIcon}/>
            </button>
            <div className="navbar__mobile_menu">
                <ul className="navbar__mobile_menu_list">
                    <li>Oferta</li>
                    <li>Struktura Kursu</li>
                    <li>Egzamin 8-klasisty</li>
                    <li>Egzamin Maturalny</li>
                    <li>Przygotowanie Do Konkursów</li>
                    <li>Bierzący Materiał</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </>
    )
}

const btnClick = (e) => {
    let element = document.querySelector('.navbar__mobile_menu')
    element.classList.toggle("menu_display")
    
}

const Navbar = () => {
    return (
        <section className="navbar">
            <img className="navbar__icon" src={owl_icon} />
            <MobileMenu />
        </section>
    )
}

export default Navbar
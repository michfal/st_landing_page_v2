import React from 'react'
import { Link } from 'react-scroll'

import './mobileMenu.scss'

import hamburgerIcon from '../../images/icon_hamburger.svg'


const btnClick = (e) => {
    const element = document.querySelector('.mobile_menu')
    element.classList.toggle("menu_display")  
}

const MobileMenu = () => {
    return (
        <>
            <button className="navbar__button" onClick={btnClick}>
                <img className="navbar__button_icon" src={hamburgerIcon} alt="menu icon"/>
            </button>
            <div className="mobile_menu">
                <ul className="mobile_menu__list">
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="offer" spy={true} smooth={true} duration={1000}>
                            Oferta
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="structure" spy={true} smooth={true} duration={1000}>
                            Struktura Kursu
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="elementary_egzam" spy={true} smooth={true} duration={1000}>
                            Egzamin 8-klasisty
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="finals" spy={true} smooth={true} duration={1000}>
                            Egzamin Maturalny
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="contest" spy={true} smooth={true} duration={1000}>
                            Przygotowanie Do Konkursów
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="current_material" spy={true} smooth={true} duration={1000}>
                            Bierzący Materiał
                        </Link>
                    </li>
                    <li className="mobile_menu__list_item">
                        <Link className="txt_white" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu
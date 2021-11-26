import React from "react"
import { Link } from "react-scroll"

import "./menu.scss"

import hamburgerIcon from "../../images/icon_hamburger.svg"

const btnClick = e => {
  const element = document.querySelector(".menu")
  element.classList.toggle("menu_display")
}

const Menu = () => {
  return (
    <>
      <button className="menu_button" onClick={btnClick}>
        <img
          className="menu_button__icon"
          src={hamburgerIcon}
          alt="menu icon"
        />
      </button>
      <div className="menu">
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="offer"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Oferta
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="structure"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Struktura Kursu
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="elementary_egzam"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Egzamin 8{"\u00A0"}klasisty
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="finals"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Egzamin Maturalny
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="contest"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Przygotowanie do Konkursów
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="current_material"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Bieżący Materiał
        </Link>
        <Link
          className="txt_white menu__item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Kontakt
        </Link>
      </div>
    </>
  )
}

export default Menu

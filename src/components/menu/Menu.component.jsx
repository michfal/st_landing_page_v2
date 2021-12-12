import React from "react"
import { Link } from "react-scroll"
import clsx from "clsx"
import { useToggle } from "../logic/useToggle"
import * as styles from "./Menu.module.scss"

import hamburgerIcon from "../../images/icon_hamburger.svg"


export const Menu = () => {

  const [planOpenState, setPlanOpen] = useToggle()

  return (
    <>
      <button className={styles.menu_button} onClick={setPlanOpen}>
        <img
          className={styles.menu_button__icon}
          src={hamburgerIcon}
          alt="menu icon"
        />
      </button>
      <div className={clsx(styles.menu, planOpenState && styles.menu_display)}>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="offer"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Oferta
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="structure"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Struktura Kursu
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="elementary_egzam"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Egzamin 8{"\u00A0"}klasisty
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="finals"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Egzamin Maturalny
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="contest"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Przygotowanie do Konkursów
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
          activeClass="active"
          to="current_material"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Bieżący Materiał
        </Link>
        <Link
          className={clsx("txt_white", styles.menu__item)}
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

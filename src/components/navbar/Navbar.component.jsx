import React from "react"
import { Menu } from "../menu/Menu.component"
import { Link } from "react-scroll"

import * as styles from "./Navbar.module.scss"

import owl_icon from "../../images/icon_owl_home.svg"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link
        className={styles.navbar__icon}
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <img className={styles.navbar__icon} src={owl_icon} alt="owl icon" />
      </Link>
      <Menu />
    </nav>
  )
}

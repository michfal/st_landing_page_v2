import React from "react"
import { Link } from "react-scroll"
import clsx from "clsx"

import * as styles from "./Footer.module.scss"

const year = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        className={clsx(styles.footer__element, styles.footer__link, "txt_purple", "txt_purple--footer")}
        activeClass="active"
        to="offer"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Oferta
      </Link>
      <h4 className="footer__element txt_purple txt_purple--footer">
        Copyright {year} Michał Fal
      </h4>
    </footer>
  )
}

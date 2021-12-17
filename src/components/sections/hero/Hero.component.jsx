import React from "react"
import { Link } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./Hero.module.scss"

import downArrowIcon from "../../../images/arrow.svg"

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <StaticImage
        className={styles.hero__logo}
        src="../../../images/st_logo.svg"
        alt="st logo"
        placeholder="none"
        quality="100"
      />

      <Link
        activeClass="active"
        to="offer"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <img
          className={styles.hero__scroll_icon}
          src={downArrowIcon}
          alt="down arrow icon"
        />
      </Link>
    </section>
  )
}

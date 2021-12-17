import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"

import aSquare from "../../../images/a_square.svg"
import squareRoot3 from "../../../images/square_root3.svg"

import * as styles from "./Contest.module.scss"

export const Contests = ({ paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="contest" className={styles.contest}>
      <div className={styles.contest__content}>
        {scrSize === "large" && (
          <Fade left duration={dur}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_contest.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        )}
        <div className={styles.contest__text}>
          <Fade right duration={dur}>
            <OvalHeader
              headerText="Przygotowanie do konkursów"
              color="orange"
            />
            <ParagraphText align={"right"} paragraph={paragraph} />
          </Fade>
        </div>
      </div>

      <img
        src={aSquare}
        className={styles.contest__a_square}
        alt="a square"
      ></img>

      <img
        src={squareRoot3}
        className={styles.contest__square_root_l}
        alt="square root"
      ></img>

      {(scrSize === "medium" || scrSize === "large") && (
        <Blob position={"contest1"} color={"light_green"} />
      )}
      {(scrSize === "medium" || scrSize === "large") && (
        <Blob position={"contest2"} color={"light_green"} />
      )}
    </section>
  )
}

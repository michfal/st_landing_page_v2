import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { LearningPlan } from "../../learningPlan/LearningPlan.component"
import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"

import squareRoot3 from "../../../images/square_root3.svg"

import * as styles from "./Finals.module.scss"

export const Finals = ({ info, paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="finals" className={styles.finals}>
      <div className={styles.finals__content}>
        <div className={styles.finals__text}>
          <Fade left duration={dur}>
            <OvalHeader
              headerText="Egzamin Maturalny"
              color="green"
            />
            <ParagraphText
              align={"left"}
              paragraph={paragraph}
            />
          </Fade>
        </div>
        {scrSize === "large" &&
          <Fade right duration={dur}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_board.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
      </div>

      <img src={squareRoot3} className={styles.finals__square_root_l} alt="square root"></img>

      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"finals"}
          color={"light_green"}
        />
      }
      <LearningPlan 
        info={info} 
        color="green" 
      />
    </section>
  )
}

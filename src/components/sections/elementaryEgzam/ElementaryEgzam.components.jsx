import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

import { LearningPlan } from "../../learningPlan/LearningPlan.component"
import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"
import { setFadeDuration } from "../../logic/setFadeDuration"
import squareRoot2 from "../../../images/square_root2.svg"

import * as styles from "./ElementaryEgzam.module.scss"

export const ElementaryEgzam = ({ info, paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="elementary_egzam" className={styles.elementary_egzam}>
      <div className={styles.elementary_egzam__content}>
        {scrSize === "large" && (
          <Fade left duration={dur} wait={1000}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_think.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        )}
        <Fade right duration={dur}>
          <div className={styles.elementary_egzam__text}>
            <OvalHeader headerText="Egzamin 8-klasisty" color="blue" />
            <ParagraphText align={"right"} paragraph={paragraph} />
          </div>
        </Fade>
      </div>

      <img
        src={squareRoot2}
        className={styles.elementary_egzam__square_root_l}
        alt="square root"
      ></img>

      {scrSize === "large" && (
        <Blob position={"elementary"} color={"light_green"} />
      )}
      <LearningPlan info={info} color="blue" border="blue" />
    </section>
  )
}

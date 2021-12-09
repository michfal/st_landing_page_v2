import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"

import * as styles from "./Contest.module.scss"

export const Contests = ({ paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="contest" className={styles.contest}>
      <div className={styles.contest__content}>
        {scrSize === "large" &&
          <Fade left duration={dur}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_contest.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
        <div className={styles.contest__text}>
          <Fade right duration={dur}>
            <OvalHeader
              headerText="Przygotowanie do konkursów"
              bgColor="background-orange"
            />
            <ParagraphText
              align={"paragraph_text-right"}
              paragraph={paragraph}
            />
          </Fade>
        </div>
      </div>
      <StaticImage
        className={styles.contest__a_square}
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      <StaticImage
        className={styles.contest__square_root_l}
        src="../../../images/square_root3.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"contest1"}
          color={"light_green"}
        />
      }
      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"contest2"}
          color={"light_green"}
        />
      }
    </section>
  )
}

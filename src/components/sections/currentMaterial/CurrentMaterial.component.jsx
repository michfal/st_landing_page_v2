import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"

import * as styles from "./CurrentMaterial.module.scss"

export const CurrentMaterial = ({ paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="current_material" className={styles.current_material}>
      <div className={styles.current_material__content}>
        <div className={styles.current_material__text}>
          <Fade left duration={dur}>
            <OvalHeader
              headerText="Opracowanie Bieżącego Materiału"
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
              className={styles.image_owl_checklist}
              src="../../../images/owls_checklist.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
      </div>
      <StaticImage
        className={styles.current_material__square_root_l}
        src="../../../images/square_root3.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"current_material"}
          color={"light_green"}
        />
      }
    </section>
  )
}

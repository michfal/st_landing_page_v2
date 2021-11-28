import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"

import "./currentMaterial.scss"

export const CurrentMaterial = ({ paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="current_material" className="current_material">
      <div className="current_material__content">
        <div className="current_material__text">
          <Fade left duration={dur}>
            <OvalHeader
              headerText="Opracowanie Bieżącego Materiału"
              bgColor="background-green"
            />
            <ParagraphText
              align={"paragraph_text-left"}
              paragraph={paragraph}
            />
          </Fade>
        </div>
        {scrSize === "large" &&
          <Fade right duration={dur}>
            <StaticImage
              className="image_owl-checklist"
              src="../../../images/owls_checklist.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
      </div>
      <StaticImage
        className="current_material__square_root_l"
        src="../../../images/square_root3.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"blob_position-current_material"}
          color={"blob_fill-light_green"}
        />
      }
    </section>
  )
}

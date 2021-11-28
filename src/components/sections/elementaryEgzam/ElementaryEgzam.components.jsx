import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

import { LearningPlan } from "../../learningPlan/LearningPlan.component"
import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { ParagraphText } from "../../paragraphText/ParagraphText.component"
import { Blob } from "../../blob/Blob.component"
import { setFadeDuration } from "../../logic/setFadeDuration"

import "./elementaryEgzam.scss"

export const ElementaryEgzam = ({ info, paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="elementary_egzam" className="elementary_egzam">
      <div className="elementary_egzam__content">
        {scrSize === "large" &&
          <Fade left duration={dur} wait={1000}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_think.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
        <Fade right duration={dur}>
          <div className="elementary_egzam__text">
            <OvalHeader
              headerText="Egzamin 8-klasisty"
              bgColor="background-blue"
            />
            <ParagraphText
              align={"paragraph_text-right"}
              paragraph={paragraph}
            />
          </div>
        </Fade>
      </div>
      <StaticImage
        className="elementary_egzam__square_root_l"
        src="../../../images/square_root2.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {scrSize === "large" &&
        <Blob
          position={"blob_position-elementary"}
          color={"blob_fill-light_green"}
        />
      }
      <LearningPlan
        info={info}
        bgColor="background-blue"
        border="lp_content--border_blue"
      />
    </section>
  )
}

import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import LearningPlan from "../../learningPlan/LearningPlan.component"
import OvalHeader from "../../ovalHeader/OvalHeader.component"
import ParagraphText from "../../paragraphText/ParagraphText.component"
import Blob from "../../blob/Blob.component"

import "./finals.scss"

const Finals = ({ info, paragraph, scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="finals" className="finals">
      <div className="finals__content">
        <div className="finals__text">
          <Fade left duration={dur}>
            <OvalHeader
              headerText="Egzamin Maturalny"
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
              className="image_owl"
              src="../../../images/owls_board.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        }
      </div>
      <StaticImage
        className="finals__square_root_l"
        src="../../../images/square_root3.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {(scrSize === "medium" || scrSize === "large") &&
        <Blob
          position={"blob_position-finals"}
          color={"blob_fill-light_green"}
        />
      }
      <LearningPlan info={info} bgColor="background-green" />
    </section>
  )
}

export default Finals

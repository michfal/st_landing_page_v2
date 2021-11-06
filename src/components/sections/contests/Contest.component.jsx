import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { SetFadeDuration } from "../../logic/setFadeDuration/SetFadeDuration"

import OvalHeader from "../../ovalHeader/OvalHeader.component"
import ParagraphText from "../../paragraphText/ParagraphText.component"
import Blob from "../../blob/Blob.component"

import "./contest.scss"

const Contests = props => {
  const { paragraph, scrSize } = props
  const dur = SetFadeDuration(scrSize)
  return (
    <section id="contest" className="contest">
      <div className="contest__content">
        {scrSize === "large" ? (
          <Fade left duration={dur}>
            <StaticImage
              className="image_owl"
              src="../../../images/owls_contest.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        ) : null}
        <div className="contest__text">
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
        className="contest__a_square"
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      <StaticImage
        className="contest__square_root_l"
        src="../../../images/square_root3.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      {scrSize === "medium" || scrSize === "large" ? (
        <Blob
          position={"blob_position-contest1"}
          color={"blob_fill-light_green"}
        />
      ) : null}
      {scrSize === "medium" || scrSize === "large" ? (
        <Blob
          position={"blob_position-contest2"}
          color={"blob_fill-light_green"}
        />
      ) : null}
    </section>
  )
}

export default Contests

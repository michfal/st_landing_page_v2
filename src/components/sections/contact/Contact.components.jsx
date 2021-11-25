import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import { setFadeDuration } from "../../logic/setFadeDuration"

import OvalHeader from "../../ovalHeader/OvalHeader.component"
import atIcon from "../../../images/icon_at.svg"
import phoneIcon from "../../../images/icon_phone.svg"

import "./contact.scss"

const Contact = ({ scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="contact" className="contact">
      <OvalHeader
        headerText="Kontakt"
        bgColor="background-blue"
        width="oval_header-narrow"
      />
      <div className="contact__content">
        <Fade left duration={dur}>
          <div className="contact__info">
            <div className="contact__info_element">
              <img
                className="contact__info_icon"
                src={atIcon}
                alt="at icon"
              ></img>
              <p className="contact__info_txt txt_purple txt_purple--regular">
                jfal@op.pl
              </p>
            </div>
            <div className="contact__info_element">
              <img
                className="contact__info_icon"
                src={phoneIcon}
                alt="at icon"
              ></img>
              <p className="contact__info_txt txt_purple txt_purple--regular">
                500 076 750
              </p>
            </div>
          </div>
        </Fade>
        {scrSize === "large" ? (
          <Fade right duration={dur}>
            <StaticImage
              className="image_owl-contact"
              src="../../../images/owls_talk.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        ) : null}
      </div>
      <StaticImage
        className="contact__a_square"
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      <StaticImage
        className="contact__square_root"
        src="../../../images/square_root2.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
    </section>
  )
}

export default Contact

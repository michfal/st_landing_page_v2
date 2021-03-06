import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"

import { setFadeDuration } from "../../logic/setFadeDuration"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import atIcon from "../../../images/icon_at.svg"
import phoneIcon from "../../../images/icon_phone.svg"
import aSquare from "../../../images/a_square.svg"
import squareRoot2 from "../../../images/square_root2.svg"

import * as styles from "./Contact.module.scss"

export const Contact = ({ scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="contact" className={styles.contact}>
      <OvalHeader headerText="Kontakt" color="blue" width="narrow" />
      <div className={styles.contact__content}>
        <Fade left duration={dur}>
          <div className={styles.contact__info}>
            <div className={styles.contact__info_element}>
              <img
                className={styles.contact__info_icon}
                src={atIcon}
                alt="at icon"
              ></img>
              <p
                className={clsx(
                  styles.contact__info_txt,
                  "txt_purple",
                  "txt_purple--regular"
                )}
              >
                jfal@op.pl
              </p>
            </div>
            <div className={styles.contact__info_element}>
              <img
                className={styles.contact__info_icon}
                src={phoneIcon}
                alt="at icon"
              ></img>
              <p
                className={clsx(
                  styles.contact__info_txt,
                  "txt_purple",
                  "txt_purple--regular"
                )}
              >
                500 076 750
              </p>
            </div>
          </div>
        </Fade>
        {scrSize === "large" && (
          <Fade right duration={dur}>
            <StaticImage
              className={styles.image_owl_contact}
              src="../../../images/owls_talk.svg"
              alt=""
              placeholder="none"
              quality="100"
            />
          </Fade>
        )}
      </div>

      <img
        src={aSquare}
        className={styles.contact__a_square}
        alt="a square"
      ></img>

      <img
        src={squareRoot2}
        className={styles.contact__square_root}
        alt="square root"
      ></img>
    </section>
  )
}

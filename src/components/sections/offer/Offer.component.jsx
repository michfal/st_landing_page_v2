import React from "react"
import clsx from "clsx"

import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

import elementaryIcon from "../../../images/icon_elementary.svg"
import contestIcon from "../../../images/icon_contest.svg"
import finalsIcon from "../../../images/icon_finals.svg"
import currentIcon from "../../../images/icon_current.svg"
import { Blob } from "../../blob/Blob.component"
import { setFadeDuration } from "../../logic/setFadeDuration"

import aSquare from "../../../images/a_square.svg"

import * as styles from "./Offer.module.scss"

export const Offer = ({ scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="offer" className={styles.offer}>
      <Fade top duration={dur}>
        <h1 className={clsx(styles.offer__header, "txt_purple")}>
          Oferuję korepetycje z matematyki, pod kątem:
        </h1>
      </Fade>

      <div className={styles.offer__list}>
        <Fade left duration={dur}>
          <div className={styles.offer__list_column}>
            <div className={styles.offer__list_element}>
              <img
                className={styles.element_icon}
                src={elementaryIcon}
                alt="elementary icon"
              ></img>
              <h2 className={clsx(styles.offer__list_element_text, "txt_purple", "txt_purple--point")}>
                Egzaminu <br /> 8-klasisty
              </h2>
            </div>
            <div className={styles.offer__list_element}>
              <img
                className={styles.element_icon}
                src={contestIcon}
                alt="contest icon"
              ></img>
              <h2 className={clsx(styles.offer__list_element_text, "txt_purple", "txt_purple--point")}>
                Egzaminu <br /> Maturalnego
              </h2>
            </div>
          </div>
        </Fade>
        <Fade right duration={dur}>
          <div className={styles.offer__list_column}>
            <div className={styles.offer__list_element}>
              <img
                className={styles.element_icon}
                src={finalsIcon}
                alt="finals icon"
              ></img>
              <h2 className={clsx(styles.offer__list_element_text, "txt_purple", "txt_purple--point")}>
                Przygotowania <br /> do konkursów
              </h2>
            </div>
            <div className={styles.offer__list_element}>
              <img
                className={styles.element_icon}
                src={currentIcon}
                alt="current icon"
              ></img>
              <h2 className={clsx(styles.offer__list_element_text, "txt_purple", "txt_purple--point")}>
                Bierzącego <br /> Materiału
              </h2>
            </div>
          </div>
        </Fade>
      </div>
      {scrSize === "large" && 
        <Blob
          position={"offer_left"}
          color={"violet"}
        />
      }
      {scrSize === "large" && 
        <Blob
          position={"offer_right"}
          color={"violet"}
        />
      }

      {/* <StaticImage
        className={styles.offer__a_square_l}
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      <StaticImage
        className={styles.offer__a_square_r}
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      /> */}

      <img src={aSquare} className={styles.offer__a_square_l} alt="a square"></img>
      <img src={aSquare} className={styles.offer__a_square_r} alt="a square"></img>

    </section>
  )
}

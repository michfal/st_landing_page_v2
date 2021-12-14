import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { Blob } from "../../blob/Blob.component"

import { OvalHeader } from "../../ovalHeader/OvalHeader.component"
import { setFadeDuration } from "../../logic/setFadeDuration"

import aSquare from "../../../images/a_square.svg"
import squareRoot1 from "../../../images/square_root1.svg"

import * as styles from "./CourseStructure.module.scss"

export const CourseStructure = ({ scrSize }) => {
  const dur = setFadeDuration(scrSize)
  return (
    <section id="structure" className={styles.structure}>
      <Fade top duration={dur}>
        <h3 className={clsx(styles.structure__header, "txt_gray", "txt_gray--header")}>
          Całość składa się z:
        </h3>
      </Fade>
      <div className={styles.structure__oval_headers}>
        <Fade left duration={dur}>
          <OvalHeader
            headerText="36 spotkań po 60 minut"
            color="green"
          />
        </Fade>
        <h3 className={clsx(styles.structure__conjunction, "txt_gray", "txt_gray--header")}>
          lub
        </h3>
        <Fade right duration={dur}>
          <OvalHeader
            headerText="18 spotkań po 120 minut"
            color="blue"
          />
        </Fade>
      </div>

      {/* <StaticImage
        className={styles.structure__a_square_l}
        src="../../../images/a_square.svg"
        alt=""
        placeholder="none"
        quality="100"
      />
      <StaticImage
        className={styles.structure__square_root_r}
        src="../../../images/square_root1.svg"
        alt=""
        placeholder="none"
        quality="100"
      /> */}

      <img src={aSquare} className={styles.structure__a_square_l} alt="a square"></img>
      
      <img src={squareRoot1} className={styles.structure__square_root_r} alt="square root"></img>

      {scrSize === "large" &&
        <Blob
          position={"structure_left"}
          color={"violet"}
        />
      }
      {scrSize === "large" &&
        <Blob
          position={"structure_right"}
          color={"violet"}
        />
      }

      <Fade left duration={dur} cascade>
        <ul className={styles.structure__list}>
          <li className={clsx("txt_gray", "txt_gray--point", styles.structure__list_point)}>
            Ilość spotkań jest uzależniona od indywidualnych możliwości i
            umiejętności ucznia
          </li>
          <li className={clsx("txt_gray", "txt_gray--point", styles.structure__list_point)}>
            Pierwsze spotkanie zawsze obejmuje poznanie wymagań i dostosowanie
            planu nauki
          </li>
          <li className={clsx("txt_gray", "txt_gray--point", styles.structure__list_point)}>
            Możliwe konsultacje online
          </li>
        </ul>
      </Fade>
    </section>
  )
}

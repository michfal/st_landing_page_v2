import React from "react"
import nextId from "react-id-generator"
import clsx from "clsx"

import { setColor } from "../../logic/setColor"

import * as styles from "./PlanItems.module.scss"

export const PlanItems = ({info, border, planOpenState}) => {

    const pointColors = {
      "point_green": styles.point_green,
      "point_blue": styles.point_blue,
      "point_violet": styles.point_violet
    }

    return (
      <div className={clsx(styles.lp_content, border && styles.lp_content_border_blue, planOpenState && styles.learning_plan_display)}>
        {info.map((e, i) => {
          return (
            <div key={nextId()} className={styles.lp_content__item}>
              <div className={clsx(styles.lp_content__item_point, pointColors[setColor(i)])}>
                <h1 className={clsx("learning_plan_counter", "txt_white")}>{i + 1}</h1>
              </div>
              <p className={clsx("txt_gray", "txt_gray--thematic_scope", styles.lp_content__item_text)}>
                {e}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
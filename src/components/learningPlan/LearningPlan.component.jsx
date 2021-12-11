import React from "react"
import downArrowIcon from "../../images/arrow.svg"
import { useToggle } from "../logic/useToggle"
import { PlanItems } from "./planItems/PlanItems.component"
import clsx from "clsx" 

import * as styles from "./LearningPlan.module.scss"



export const LearningPlan = ({ info, color, border }) => {
  const list = info !== undefined

  const bgColors = {
    "green": styles.background_green,
    "blue": styles.background_blue,
  }

  const [planOpenState, setPlanOpen] = useToggle()
  
  return (
    <>
      <div className={styles.learning_plan}>
        <button
          onClick={setPlanOpen}
          tabIndex={0}
          className={clsx(styles.learning_plan__header, bgColors[color], "txt_white", "txt_white--learning_plan")}
        >
          <img
            className={clsx(styles.learning_plan__scroll_icon, planOpenState && "lp_arrow_rotate")}
            src={downArrowIcon}
            alt="down arrow icon"
          />
          Przykładowy Program
        </button>

        {list && <PlanItems info={info} border={border} planOpenState={planOpenState}/>}
      </div>
    </>
  )
}

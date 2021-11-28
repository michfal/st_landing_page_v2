import React from "react"
import downArrowIcon from "../../images/arrow.svg"
import { useToggle } from "../logic/useToggle"
import { PlanItems } from "./PlanItems.component"


import "./learningPlan.scss"


export const LearningPlan = ({ info, bgColor, border }) => {
  const list = info !== undefined

  const [planOpenState, setPlanOpen] = useToggle()
  
  return (
    <>
      <div className="learning_plan">
        <button
          onClick={setPlanOpen}
          tabIndex={0}
          className={`learning_plan__header ${bgColor} txt_white txt_white--learning_plan`}
        >
          <img
            className={`learning_plan__scroll_icon ${planOpenState && "lp_arrow_rotate"}`}
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

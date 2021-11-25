import React from "react"
import nextId from "react-id-generator"
import downArrowIcon from "../../images/arrow.svg"
import { setColor, planOpen } from "../logic/learningPlanLogic"


import "./learningPlan.scss"


const planItem = (info, border) => {
  return (
    <div className={`lp_content ${border}`}>
      {info.map((e, i) => {
        return (
          <div key={nextId()} className="lp_content__item">
            <div className={`lp_content__item_point ${setColor(i)}`}>
              <h1 className="learning_plan_counter txt_white">{i + 1}</h1>
            </div>
            <p className="txt_gray txt_gray--thematic_scope lp_content__item_text">
              {e}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const LearningPlan = (props) => {
  const { info, bgColor, border } = props
  const list = info !== undefined

  return (
    <>
      <div className="learning_plan">
        <button
          onClick={planOpen}
          tabIndex={0}
          className={`learning_plan__header ${bgColor} txt_white txt_white--learning_plan`}
        >
          <img
            className="learning_plan__scroll_icon"
            src={downArrowIcon}
            alt="down arrow icon"
          />
          Przykładowy Program
        </button>

        {list ? planItem(info, border) : null}
      </div>
    </>
  )
}

export default LearningPlan

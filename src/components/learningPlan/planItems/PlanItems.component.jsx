import React from "react"
import nextId from "react-id-generator"
import clsx from "clsx"

import { setColor } from "../../logic/learningPlanLogic"

import "./planItems.scss"

export const PlanItems = ({info, border, planOpenState}) => {
    
    return (
      <div className={clsx("lp_content", border, planOpenState && "learning_plan_display")}>
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
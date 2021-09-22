import React from 'react'
import nextId from 'react-id-generator'
import downArrowIcon from '../../images/arrow.svg'

import './learningPlan.scss'


const setColor = (i) => {
    const number = i + 1;
    if (number % 3 === 0) {
        return 'point_green'
    }
    if ((number + 1) % 3 === 0) {
        return 'point_violet'
    }
}


const planOpen = (e) => {

    const content = e.target.childNodes[1]
    const arrow = e.target.childNodes[0].childNodes[0]

    content.classList.toggle("learning_plan_display") 
    arrow.classList.toggle("lp_arrow_rotate") 
}

const planItem = (info, border) => {

    return (
        <div className={`lp_content ${border}`}>{
            info.map((e, i) => {
                setColor(i)      
                return (
                    <div key={nextId()} className="lp_content__item">
                        <div className={`lp_content__item_point ${setColor(i)}`}>
                            <h1 className="learning_plan_counter txt_white">{i+1}</h1>
                        </div>
                        <p className="txt_gray txt_gray--thematic_scope lp_content__item_text">{e}</p> 
                    </div>
                )
            })
        }</div>    
    )
}

function LearningPlan(props) {
    const {info, bgColor, border} = props
    const list = info !== undefined

    return (
        <>  
            <div className="learning_plan" onClick={planOpen}>
                <div className={`learning_plan__header ${bgColor}`} >
                    <img className="learning_plan__scroll_icon" src={downArrowIcon} alt="down arrow icon"  />
                    <h1 className="txt_white txt_white--learning_plan">Przykładowy Program</h1>
                </div>

                {list ? planItem(info, border) : null}
            </div>

        </>
    )
}

export default LearningPlan
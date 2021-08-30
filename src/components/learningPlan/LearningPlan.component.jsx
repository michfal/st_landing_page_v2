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

const planItem = (info) => {
    console.log(info)
    return (
        
        <div className="lp_content">{
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

const planOpen = () => {
    console.log("open")
    const content = document.querySelector('.lp_content')
    content.classList.toggle("learning_plan_display")  
}

const LearningPlan = ({info}) => {
    const list = info !== undefined

    return (
        <>  
            <div className="learning_plan">
                <div className="learning_plan__header" onClick={planOpen}>
                    <img className="learning_plan__scroll_icon" src={downArrowIcon} alt="down arrow icon"  />
                    <h1 className="txt_white txt_white--learning_plan">Przykładowy Program</h1>
                </div>
                
                
                    {/* {list ? <ol className="learning_plan__content">{info.map((e) => <li key={nextId()} className="txt_gray txt_gray--thematic_scope learning_plan__content_li">{e}</li>)}</ol> : null} */}
                    {list ? planItem(info) : null}
            </div>

        </>
    )
}

export default LearningPlan
import React from 'react'
import nextId from 'react-id-generator'

import './learningPlan.scss'

const planItem = (info) => {
    console.log(info)
    return (
        <div className="lp_content">{
            info.map((e, i) => {        
                return (
                    <div className="lp_content__item">
                        <div className="lp_content__item_point">
                            <h1 className="learning_plan_counter txt_white">{i+1}</h1>
                        </div>
                        <p className="txt_gray txt_gray--thematic_scope lp_content__item_text">{e}</p> 
                    </div>
                )
            })
        }</div>    
    )
    

}

const LearningPlan = ({info}) => {
    const list = info !== undefined

    return (
        <>  
            <div className="learning_plan">
                <h1 className="txt_white learning_plan__header">Przykładowy program</h1>
                
                    {/* {list ? <ol className="learning_plan__content">{info.map((e) => <li key={nextId()} className="txt_gray txt_gray--thematic_scope learning_plan__content_li">{e}</li>)}</ol> : null} */}
                    {list ? planItem(info) : null}
            </div>

        </>
    )
}

export default LearningPlan
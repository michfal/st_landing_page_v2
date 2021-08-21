import React from 'react'
import nextId from 'react-id-generator'

import './learningPlan.scss'

const LearningPlan = ({info}) => {
    const list = info !== undefined

    return (
        <>  
            <div className="learning_plan">
                <h1 className="txt_white learning_plan__header">Przykładowy program</h1>
                <ul className="learning_plan__content">
                    {list ? <ul>{info.map((e) => <li key={nextId()} className="txt_gray txt_gray--thematic_scope">{e}</li>)}</ul> : <ul></ul>}
                </ul>
            </div>

        </>
    )
}

export default LearningPlan
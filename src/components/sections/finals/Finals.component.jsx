import React from 'react'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'

import './finals.scss'

const Finals = (props) => {

    const {info, paragraph} = props

    return (
        <section id="finals" className="finals">
            <OvalHeader headerText="Egzamin Maturalny" bgColor="background-green"/>
            <ParagraphText paragraph={paragraph}/>
            <LearningPlan info={info} bgColor="background-green"/>
        </section>
    )
}


export default Finals
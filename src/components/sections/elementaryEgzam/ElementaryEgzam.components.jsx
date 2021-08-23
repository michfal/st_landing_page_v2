import React from 'react'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'

import './elementaryEgzam.scss'

const ElementaryEgzam = (props) => {

    const {info, paragraph} = props

    return (
        <section className="elementary_egzam">
            <OvalHeader headerText="Egzamin 8-klasisty" bgColor="background-blue"/>
            <ParagraphText paragraph={paragraph}/>
            <LearningPlan info={info}/>
        </section>
    )
}

export default ElementaryEgzam
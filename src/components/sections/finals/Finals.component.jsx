import React from 'react'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'
import Blob from '../../blob/Blob.component'


import './finals.scss'

const Finals = (props) => {
   
    const {info, paragraph, scrSize} = props

    return (
        <section id="finals" className="finals">
            <OvalHeader headerText="Egzamin Maturalny" bgColor="background-green"/>
            <ParagraphText paragraph={paragraph}/>
            <LearningPlan info={info} bgColor="background-green"/>
            {(scrSize === 'medium' || scrSize === 'large') ? <Blob position={"blob_position-finals_tablet"} color={"blob_fill-light_green"}/>: null}
        </section>
    )
}


export default Finals
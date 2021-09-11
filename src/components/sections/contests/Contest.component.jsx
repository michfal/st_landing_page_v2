import React from 'react'

import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'

import './contest.scss'

const Contests = (props) => {

    const {paragraph} = props
    return (
        <section id="contest" className="contest">
            <OvalHeader headerText="Przygotowanie do konkursów" bgColor="background-orange"/>
            <ParagraphText paragraph={paragraph}/>
        </section>
    )
}

export default Contests
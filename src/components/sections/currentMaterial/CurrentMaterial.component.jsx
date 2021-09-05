import React from 'react'

import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'

const CurrentMaterial = (props) => {

    const {paragraph} = props

    return (
        <section className="currentMaterial">
            <OvalHeader headerText="Opracowanie Bieżącego Materiału" bgColor="background-green"/>
            <ParagraphText paragraph={paragraph}/>
        </section>
    )
}

export default CurrentMaterial
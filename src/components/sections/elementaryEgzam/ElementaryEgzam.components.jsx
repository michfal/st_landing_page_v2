import React from 'react'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.components'

const ElementaryEgzam = ({info}) => {

    return (
        <section>
            <OvalHeader headerText="Egzamin 8-klasisty" bgColor="background-blue"/>
            <LearningPlan info={info}/>
        </section>
    )
}

export default ElementaryEgzam
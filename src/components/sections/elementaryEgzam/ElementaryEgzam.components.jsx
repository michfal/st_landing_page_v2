import React from 'react'
import nextId from 'react-id-generator'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.components'


const ElementaryEgzam = ({info}) => {
    const list = info !== undefined

    return (
        <section>
            <OvalHeader headerText="18 spotkań po 120 minut" bgColor="background-blue"/>
            {list ? <ul>{info.map((e) => <li key={nextId()}>{e}</li>)}</ul> : <ul></ul>}
            <LearningPlan />
        </section>
    )
}

export default ElementaryEgzam
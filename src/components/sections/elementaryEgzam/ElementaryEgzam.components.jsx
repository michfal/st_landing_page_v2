import React from 'react'

import LearningPlan from '../../learningPlan/LearningPlan.component'

const ElementaryEgzam = (value) => {
    console.log(value.value)
    return (
        <section>
            <h1>ElementaryEgzam</h1>
            <LearningPlan />
        </section>
    )
}

export default ElementaryEgzam
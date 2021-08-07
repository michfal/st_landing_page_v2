import React from 'react'

import './courseStructure.scss'

const CourseStructure = () => {
    return (
        <section className="structure">
            <h3 className="structure__header">Całość składa się z:</h3>
            <h4>36 spotkań po 60 minut</h4>
            <h5>lub</h5>
            <h4>18 spotkań po 120 minut</h4>
            <ul className="structure__list">
                <li>Ilość spotkań jest uzależniona od indywidualnych możliwości i umiejętności ucznia</li>
                <li>Pierwsze spotkanie zawsze obejmuje poznanie wymagań i dostosowanie planu nauki</li>
                <li>Możliwe konsultacje online</li>
            </ul>
        </section>
    )
}

export default CourseStructure
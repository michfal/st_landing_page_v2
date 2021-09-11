import React from 'react'

import OvalHeader from '../../ovalHeader/OvalHeader.component'

import './courseStructure.scss'

const CourseStructure = () => {
    return (
        <section id="structure" className="structure">
            <h3 className="structure__header txt_gray txt_gray--header">Całość składa się z:</h3>
            <div className="structure__oval_headers">
                <OvalHeader headerText="36 spotkań po 60 minut" bgColor="background-green"/>
                <h3 className="txt_gray txt_gray--header ">lub</h3>
                <OvalHeader headerText="18 spotkań po 120 minut" bgColor="background-blue"/>
            </div>

            <ul className="structure__list">
                <li className="txt_gray txt_gray-point structure__list_point">Ilość spotkań jest uzależniona od indywidualnych możliwości i umiejętności ucznia</li>
                <li className="txt_gray txt_gray-point structure__list_point">Pierwsze spotkanie zawsze obejmuje poznanie wymagań i dostosowanie planu nauki</li>
                <li className="txt_gray txt_gray-point structure__list_point">Możliwe konsultacje online</li>
            </ul>
        </section>
    )
}

export default CourseStructure
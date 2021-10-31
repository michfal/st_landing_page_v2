import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Fade from 'react-reveal/Fade'
import Blob from '../../blob/Blob.component'

import OvalHeader from '../../ovalHeader/OvalHeader.component'
import {SetFadeDuration} from '../../logic/setFadeDuration/SetFadeDuration'

import './courseStructure.scss'

const CourseStructure = ({scrSize}) => {
    const dur = SetFadeDuration(scrSize)
    return (
        <section id="structure" className="structure">
            <Fade top duration={dur}>
                <h3 className="structure__header txt_gray txt_gray--header">Całość składa się z:</h3>
            </Fade>
            <div className="structure__oval_headers">
                <Fade left duration={dur}>
                    <OvalHeader headerText="36 spotkań po 60 minut" bgColor="background-green"/>
                </Fade>
                <h3 className="structure__conjunction txt_gray txt_gray--header ">lub</h3>
                <Fade right duration={dur}>
                    <OvalHeader headerText="18 spotkań po 120 minut" bgColor="background-blue"/>
                </Fade>
            </div>

            <StaticImage 
                className="structure__a_square_l" 
                src="../../../images/a_square.svg"
                alt=""
                placeholder="none"
                quality="100"
            />
            <StaticImage 
                className="structure__square_root_r" 
                src="../../../images/square_root1.svg"
                alt="" 
                placeholder="none"
                quality="100"
            />

            {(scrSize === 'large') ? <Blob position={"blob_position-structure_left"} color={"blob_fill-violet"}/>: null}
            {(scrSize === 'large') ? <Blob position={"blob_position-structure_right"} color={"blob_fill-violet"}/>: null}

            <Fade left duration={dur} cascade>
            <ul className="structure__list">
                <li className="txt_gray txt_gray--point structure__list_point">Ilość spotkań jest uzależniona od indywidualnych możliwości i umiejętności ucznia</li>
                <li className="txt_gray txt_gray--point structure__list_point">Pierwsze spotkanie zawsze obejmuje poznanie wymagań i dostosowanie planu nauki</li>
                <li className="txt_gray txt_gray--point structure__list_point">Możliwe konsultacje online</li>
            </ul>
            </Fade>
        </section>
    )
}

export default CourseStructure
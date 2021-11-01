import React from 'react'
import Fade from 'react-reveal/Fade'
import { StaticImage } from "gatsby-plugin-image"

import {SetFadeDuration} from '../../logic/setFadeDuration/SetFadeDuration'

import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'

import './currentMaterial.scss'

const CurrentMaterial = (props) => {

    const {paragraph, scrSize} = props
    const dur = SetFadeDuration(scrSize)
    return (
        <section id="current_material" className="current_material">
            <div className="current_material__content">
                <div className="current_material__text">
                    <OvalHeader headerText="Opracowanie Bieżącego Materiału" bgColor="background-green"/>
                    <ParagraphText align={"paragraph_text-left"} paragraph={paragraph}/>
                </div>
                {(scrSize === 'large') ? 
                    <Fade left duration={dur}>
                        <StaticImage 
                            className="image_owl-checklist" 
                            src="../../../images/owls_checklist.svg"
                            alt=""
                            placeholder="none"
                            quality="100"
                        />
                    </Fade>
                : null}
            </div>

        </section>
    )
}

export default CurrentMaterial
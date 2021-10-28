import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Fade from 'react-reveal/Fade'

import LearningPlan from '../../learningPlan/LearningPlan.component'
import OvalHeader from '../../ovalHeader/OvalHeader.component'
import ParagraphText from '../../paragraphText/ParagraphText.component'
import Blob from '../../blob/Blob.component'

import './elementaryEgzam.scss'

const ElementaryEgzam = (props) => {

    const {info, paragraph, scrSize} = props

    return (
        <section id="elementary_egzam" className="elementary_egzam">
            <StaticImage 
                className="elementary_egzam__square_root_l" 
                src="../../../images/square_root2.svg"
                alt="" 
                placeholder="none"
                quality="100"
            />
            <div className="elementary_egzam__content">
                {(scrSize === 'large') ? 
                    <Fade left wait={1000}>
                    <StaticImage 
                    className="elementary_egzam__image_owl" 
                    src="../../../images/owls_think.svg"
                    alt=""
                    placeholder="none"
                    quality="100"
                    />
                    </Fade>
                : null}
                <Fade right>
                    <div className="elementary_egzam__text">
                        <OvalHeader headerText="Egzamin 8-klasisty" bgColor="background-blue"/>
                        <ParagraphText align={"paragraph_text-right"} paragraph={paragraph}/>
                    </div>
                </Fade>
            </div>
            {(scrSize === 'large') ? <Blob position={"blob_position-elementary"} color={"blob_fill-light_green"}/>: null}
            <LearningPlan info={info} bgColor="background-blue" border="lp_content--border_blue"/>
        </section>
    )
}

export default ElementaryEgzam
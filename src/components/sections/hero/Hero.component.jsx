import React from 'react'
// import Fade from 'react-reveal/Fade'

import './hero.scss'

import logo from "../../../images/st_logo.svg"
import downArrowIcon from "../../../images/arrow.svg"

const Hero = () => {
    return(
        <section className="hero">
            <img className="hero__logo" src={logo} alt="st logo" />
            <img className="hero__scroll_icon" src={downArrowIcon} alt="down arrow icon" />
        </section>
    )
};

export default Hero
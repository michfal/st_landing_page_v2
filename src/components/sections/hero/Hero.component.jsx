import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'


const Hero = () => {
    return(
        <section >
            <p className="test">hero</p>
            <Fade left>
            <h1>React Reveal</h1>
            </Fade>
            <Fade right>
            <StaticImage
                src="../../../images/st_logo.svg"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
            />
            </Fade>

        </section>
    )
};

export default Hero
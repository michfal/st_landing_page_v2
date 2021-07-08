import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/sections/hero/Hero.component"

import Seo from "../components/seo"

import "../style/main.scss"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <StaticImage
      src="../images/main_bg.svg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </>
)

export default IndexPage

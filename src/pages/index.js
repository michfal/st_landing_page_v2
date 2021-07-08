import * as React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{'Szkola Talentow'}</title>
      <html lang={'pl'} />
      <meta name="description" content={'Landing page for private math coaching school'} />
    </Helmet>

    <Layout />
  </>
)

export default IndexPage

import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"

const Projects = ({ location }) => {
  return (
    <Layout location={location}>
      <Header location={location}/>
      <p>This page is currently a work in progress. In the (near) future it will hold a list of my side projects and notes on my experience building them.</p>
      <SEO title="Projects" />
    </Layout>
  )
}

export default Projects


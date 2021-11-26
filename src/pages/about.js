import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import { SmileySticker, HandWaving, Coffee } from "phosphor-react"

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <Header location={location}/>
      <SEO title="About me" />
      <div className="about-page">
        <h4><span role="img" aria-label="Person on laptop">‍<SmileySticker size={24} /></span> What I'm up to now</h4>
        <p>I'm finishing my final semester of a CS degree and then heading to San Francisco to work as a software engineer at Twitch.
          I like to work on distributed systems and infrastructure and now more than ever, I'm looking for decentralized solutions that
          empower users. My typical problem solving process, before I get to the coding part, includes hand draw diagrams that depict 
          data flow and connections with lots of coloured sticky notes.</p>        
        <h4><span role="img" aria-label="Sunflower"><Coffee size={24} /></span> A little more about me</h4>
        <p>When I'm not busy with my adult responsibilities, I like to be moving——running, hiking, boxing, swimming. I think sunrises
          are better than sunsets and like to be up to see them. If I'm not outside, I'm probably trying out a new recipe or 
          reading from my ever growing list of books.</p>
        <h4><span role="img" aria-label="Hand wave"><HandWaving size={24} /></span> Reach out</h4>        
        <p>I always happy to meet new people and hear fresh perspectives. You can find me on <a href="https://www.linkedin.com/in/marissaphul/">linkedin</a> and <a href="https://github.com/marissap">github</a>. 
        I do really like <a href="mailto:hello@marissa.digital">email</a> so feel free to send me something nice.</p>
      </div>
      <footer>
        <p style={{ fontSize: `12px` }}>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by Marissa Phul
        </p>
      </footer>
    </Layout>
  )
}

export default About


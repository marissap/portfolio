import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote"
import SmileySticker from "../assets/smileysticker2.svg"

function dragElement(el) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(el.id + "header")) {
    document.getElementById(el.id + "header").onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const BlogIndex = ({ data, location }) => {

  useEffect(() => {
    dragElement(document.getElementById("sticker"));
  }, []);

  return (
    <html lang="en" className="home">
      <Quote></Quote>
      <Layout location={location} title="{siteTitle}">
        <SEO title="Marissa Phul" keywords={[`blog`, `software engineer`]}/>
        <h1 className="title"><span className="underline">Marissa</span> Phul</h1>
        <div className="title-about">
          <p>I am a software engineer.</p>
          <p>I believe we can create any world we want. I work on products and ideas that embody this spirit of progress and creativity.</p>
          <p>I currently work at Twitch on the video platform, trying to improve our infrastructure and systems to make video get to you faster. I also recently graduated with a computer science degree.</p>
          <p>I like breaking down complex problems and building from the ground-up to create human-centered systems and bring people together, on and offline.</p>
        </div>
            {/* <span className="site-accent"><ThemeToggler>
                      {({ theme, toggleTheme }) => (
                          <label style={{ cursor: `pointer`, opacity: 0.8 }}>
                          <input
                              style={{ display: `none` }}
                              type="checkbox"
                              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                              checked={theme === "dark"}
                          />
                          {theme === "dark" ? `☀️` : `🌙`}
                          </label>
                      )}
              </ThemeToggler></span> */}
        <div className="buttons">
          <Link to="/about">about</Link>
          <Link to="/blog">blog</Link>
          <Link to="/projects">projects</Link>           
        </div>

        <div id="sticker" style={{ 
              position: 'absolute',
              bottom: 0,
              right: 8,               
            }}>
          <img id="stickerheader" src={SmileySticker} alt="Smiley Sticker" />
        </div>
      </Layout>
    </html>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
          }
      }
    }
  }
`

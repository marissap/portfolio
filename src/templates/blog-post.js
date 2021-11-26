import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { hardcodedImage } from "../../content/assets/blue-blob.png"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next, readingTime } = pageContext

  // const hardcodedImage = "content/assets/blue-blob.png"
  const image = post.frontmatter.image ? post.frontmatter.image.childImageSharp.resize : null

  return (
    <html lang="en" style={{ backgroundColor: '#fff' }}>
    <Layout location={location} title={siteTitle}>
      <Header location={location}/>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} image={image}/>
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.frontmatter.description} />
        <meta name="twitter:image" content={hardcodedImage} />
        <meta name="image" content={hardcodedImage} />
		    <meta property="og:image" content={hardcodedImage} />
      </head>
      <article>
        <header>
          <h2
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h2>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date} - {readingTime}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <footer>
        <p style={{ fontSize: `12px` }}>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by Marissa Phul
        </p>
      </footer>
    </Layout>
    </html>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description  
      }
    }
  }
`

// image: featured {
//   childImageSharp {
//     resize(width: 1200) {
//       src
//       height
//       width
//     }
//   }
// }      
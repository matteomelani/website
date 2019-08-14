import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostItem from "../components/postItem"


export default ({ data }) => (
    <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'}]}> 
        <p id='pinned-message'>
          Hello this is my Matteo Melani. I usually write something every day.
          <br></br>
          To contact me go to my <Link to="/about">about page</Link>
        </p>
        {
          data.allMarkdownRemark.edges.map(
            ( {node} )=> (
              <PostItem key={node.frontmatter.title} title={node.frontmatter.title} slug={node.fields.slug} />
            )
          )
        }
    </Layout>
)


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
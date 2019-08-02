import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostItem from "../components/postItem"

export default ({ data }) => (
    <Layout> 
        <h3>{data.site.siteMetadata.title}</h3>
        {
          data.allMarkdownRemark.edges.map(
            ( {node} )=> (
              <PostItem key={node.frontmatter.title} title={node.frontmatter.title} />
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/postItem"


export default ({ data }) => (
    <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'},{text: 'Posts' , link: 'posts'}]}>
      <SEO 
        title = 'Posts'
        description= "Matteo Melani's posts"
        zType = 'website'
      />
        {
          data.allMarkdownRemark.edges.map(
            ({ node })=> (
              <PostItem 
                key = {node.frontmatter.title} 
                title = {node.frontmatter.title} 
                slug = {node.fields.slug} 
                date = {node.frontmatter.date}
              />
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
            date(formatString: "MMM DD")
            title
            description
          }
        }
      }
    }
  }
`
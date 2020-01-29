import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/postitem"


export default ({ data }) => (
    <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'},{text: 'Posts' , link: 'posts'}]}>
      <SEO 
        title = 'Posts'
        description= "Matteo Melani's posts"
        zType = 'website'
      />
        <section class='section'>
            {/* <div class='subtitle'>Technical</div> */}
            {data.allMarkdownRemark.edges.map(({ node })=> (
                <PostItem 
                    key = {node.frontmatter.title} 
                    title = {node.frontmatter.title} 
                    slug = {node.fields.slug} 
                    date = {node.frontmatter.date}
                />
            ))}
        </section>
    </Layout>
)


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
        filter: {fields: { collection: {eq: "blog"}} },
        sort: { fields: [frontmatter___date], order: DESC }) 
    {
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
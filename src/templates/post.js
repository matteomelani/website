import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ( props ) => {
    const post = props.data.markdownRemark
    return (
        <Layout breadcrumbsItems={[
          { text:'Matteo Melani', link: '/' },
          { text: 'Posts', link: 'posts'},
          { text: post.frontmatter.title , link: post.slug }]}>
          <SEO 
            title = { post.frontmatter.title } 
            description= { post.frontmatter.description || post.excerpt }
            pathname = {props.uri}
            zType = "article"
          />
          <article className='section'>
            <header>
                {/* <h1 className="">{post.frontmatter.title}</h1> */}
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            description
            date
          }
        }
    }
`
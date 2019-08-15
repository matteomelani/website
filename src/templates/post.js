import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ( props ) => {
    const post = props.data.markdownRemark
    return (
        <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'},{text: post.frontmatter.title , link: post.slug}]}>
          <SEO 
            title = { post.frontmatter.title } 
            description= { post.frontmatter.description || post.excerpt }
            pathname = {props.uri}
            zType = "article"
          />
          <article>
            <header>
                <div className="post-title is-size-4">{ post.frontmatter.title }</div>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
    }
`
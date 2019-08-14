import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ( {data} ) => {
    const post = data.markdownRemark
    return (
        <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'},{text: post.frontmatter.title , link: post.slug}]}>
            <div>{ post.frontmatter.title }</div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
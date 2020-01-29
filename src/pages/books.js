import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BookItem from '../components/BookItem'

export default ({ data }) => (
    <Layout breadcrumbsItems={[{ text:'Matteo Melani', link: '/' },{ text:'books', link: '/books' }]}>
        <SEO title = 'Books' description = 'List of books I have read.' pathname = '/books' zType = 'books' />
        <section class='section'>
            {data.allMarkdownRemark.group.reverse().map( (g ) => {
                return (
                    <div className=''>
                        <div className='title'>{g.fieldValue}</div>
                        <ul>
                            {g.edges.map(({ node })=> {
                                const book = { ...node.frontmatter, ...node.fields}
                                return <BookItem key = {book.title} book = {book} />
                            })}
                        </ul>
                        <br></br>
                    </div>
                    
                )
            })}
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
        filter: {fields: { collection: {eq: "books"}} },
        sort: { fields: [frontmatter___date], order: DESC }) 
    {
        group(field: frontmatter___read_in) {
            fieldValue
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMM DD")
                  title
                  description
                  author
                  read_in
                  published
                  publication_date
                  worth_reading
                  worth_listening
                }
              }
            }
        }
    }
  }
`
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    
    const parent = getNode(_.get(node, 'parent'))
    createNodeField({
      node,
      name: `collection`,
      value: _.get(parent, 'sourceInstanceName')
    })
  }
}

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })
  })
}
exports.sourceNodes = function sourceNodes({ actions }) {
  const { createTypes } = actions

  createTypes(`
    type MyType @infer {
      date: Date @dateformat(formatString: "DD MMM", locale: "fi")
    }
  `)
}
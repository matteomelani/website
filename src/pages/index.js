import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/postItem"


export default ({ data }) => (
    <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'}]}>
      <SEO 
        title = "All Posts" 
        description= "Matteo Melani's posts" 
        zType = 'website'
      />
        <ul>
          <li><Link to='posts'>Posts</Link></li>
          <li><Link to='books'>Books</Link></li>
          <li><Link to='places'>Places</Link></li>
          <li><Link to='design'>Design</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
    </Layout>
)
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


export default ({ data }) => (
    <Layout breadcrumbsItems={[{text:'Matteo Melani', link: '/'}]}>
      <SEO 
        title = "All Posts" 
        description= "Matteo Melani's posts" 
        zType = 'website'
      />
      <section class='section'>
        <ul>
          <li><Link to='posts'>Posts</Link></li>
          <li><Link to='startup'>Startup</Link></li>
          <li><Link to='books'>Books</Link></li>
          <li><Link to='about'>About</Link></li>
        </ul>
      </section>
    </Layout>
) 
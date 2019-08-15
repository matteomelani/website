import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo"

export default () => (
    <Layout breadcrumbsItems={[{ text:'Matteo Melani', link: '/' },{ text:'About', link: '/about' }]}>
      <SEO title = 'About' description = 'About Matteo Melani.' pathname = '/about' zType = 'profile' />
      <p>Lorem ipsus...</p>
      <p>Bingo bongo</p>
      <div id="contact-info">
        <p>
          <a href="https://www.twitter.com/matteomelani">@matteomelani</a>
          <br/>
          <a href="https://www.linkedin.com/in/matteomelani">Linkedin</a>
        </p>
      </div>
    </Layout>
)
import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo"

export default () => (
    <Layout breadcrumbsItems={[{ text:'Matteo Melani', link: '/' },{ text:'About', link: '/about' }]}>
      <SEO title = 'About' description = 'About Matteo Melani.' pathname = '/about' zType = 'profile' />
      <p>My name is Matteo Melani. I am an entrepreneur in Silicon Valley. I solved problems at LBNL, SLAC, Microsoft and Twitter. I enjoy writting code as much as deleting it.</p>
      <p>I love bicyles and riding them. When possible, for long distances and across mountains.</p>
      <div id="contact-info">
        <p>
          <a href="https://www.twitter.com/matteomelani">@matteomelani</a>
          <br/>
          <a href="https://www.linkedin.com/in/matteomelani">Linkedin</a>
        </p>
      </div>
    </Layout>
)
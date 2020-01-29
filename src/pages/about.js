import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo"

export default () => (
    <Layout breadcrumbsItems={[{ text:'Matteo Melani', link: '/' },{ text:'About', link: '/about' }]}>
      <SEO title = 'About' description = 'About Matteo Melani.' pathname = '/about' zType = 'profile' />
      <section id="contact-info" class='section'>
        <p>
          <ul>
            <li><a href="https://www.twitter.com/matteomelani">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/matteomelani">Linkedin</a></li>
            <li><a href="https://github.com/matteomelani">Github</a></li>
          </ul>
        </p>
      </section>
    </Layout>
)
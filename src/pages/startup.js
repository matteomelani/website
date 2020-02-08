import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo"
import { Link } from "gatsby";

export default () => (
    <Layout breadcrumbsItems={[{ text:'Matteo Melani', link: '/' },{ text:'Startup', link: '/startup' }]}>
      <SEO title = 'Startup' description = 'Resource about building a startup.' pathname = '/startup' zType = 'profile' />
      <section class='section'>
        <div class='title'>2020</div>
        <p>
          <a target='_blank' href="https://www.nfx.com/post/founders-startup-risk-types">Why Founders Should Take More Risk.</a>
          <p>
            By Peter Flint of NFX. The article talks about the different kind of risks a founder must consider. 
            It is useful to evaluate startup ideas and to understand how investors see risks. 
            Founders are the biggest investors in a startup, unlike VCs they cannot apply a 
            portfolio approach and they invest their time which is not a renewable. 
          </p>
          <p>
            <ui className="has-text-grey-light">
              <li>Market risk: people don't want what you are building</li>
              <li>Execution risk: you cannot build the product you evision.</li>
              <li>Market risk => decide if you want to start a company or not.</li>
              <li>Product Risk: people want your product?</li>
              <li>Existing thriving business => demand => more execution risk.</li>
              <li>Play where there WILL BE demand</li>
              <li> Scale Risk: what's the size of the market?</li>
              <li> Focus on big problems, market will follow.</li>
              <li> Competitive Risk: who's the competition?</li>
              <li> Timing Risk: is this the right time?</li>
              <li> Legal Risk: what's the regulatory environment?</li>

            </ui>
          </p>
        </p>
      </section>
      <section class='section'>
        <div class='title'>2011</div>
        <p>
          <a target='_blank' href="http://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/">
            All Revenue is Not Created Equal: The Keys to the 10X Revenue Club.
          </a>
          <p>
            By Bill Gurley of Benchmark. The article helps understanding how investors evaluates 
            opportunities and markets. Assuming the idea works, can the company generates 
            the "right" revenues?
          </p>
        </p>
      </section>
    </Layout>
)
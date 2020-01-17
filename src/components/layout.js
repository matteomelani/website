import React from "react"
import Breadcrumbs from "./breadcrumbs"

import './layout.scss'

export default (props) => (
  <div> 
    <nav id='mm-topnavbar' className='navbar is-fixed-top is-primary'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <Breadcrumbs items={props.breadcrumbsItems} />
        </div>
      </div>
    </nav>
    <section id='mm-mainarea' className='section'> 
      <div className='columns'>
        <div id='main-box' className='column is-four-fifths'>
          {props.children}
        </div>
      </div>
    </section>
  </div>
)


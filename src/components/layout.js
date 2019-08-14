import React from "react"
import Breadcrumbs from "./breadcrumbs"

export default (props) => (
  <div className='container'> 
    <div id='top-bar'>
      <Breadcrumbs items={props.breadcrumbsItems}></Breadcrumbs>
    </div>
    <div id='main-area'> 
      <div className='columns'>
        <div id='main-box' className='column is-four-fifths'>
          {props.children}
        </div>
      </div>
    </div>
  </div>
)


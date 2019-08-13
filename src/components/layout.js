import React from "react"
import Breadcrumbs from "./breadcrumbs"
import styles from "./layout.module.css"


export default (props) => (
  <div className='container'> 
    <div id='topBar' styles={styles.topBar}>
      <Breadcrumbs items={props.breadcrumbsItems}></Breadcrumbs>
    </div>
    <div id='mainArea'> 
      <div className='columns'>
        <div id='mainBox' className='column is-four-fifths'>
          {props.children}
        </div>
      </div>
    </div>
  </div>
)


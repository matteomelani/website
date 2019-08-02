import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div id='topBox' className={styles.topBox}>
    <div id='mainBox' className={styles.mainBox}>
      {children}
    </div>
    <div id='navBox' className={styles.navBox}>
      <ul>
        <ListLink to="/">Main</ListLink>
        {/* <ListLink to="/about/">About</ListLink> */}
      </ul>
    </div>
  </div>
)


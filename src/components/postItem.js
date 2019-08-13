import React from "react"
import { Link } from "gatsby"
import styles from "./postItem.module.css"

const PostItem = props => (
    <div className={styles.postItem}>
        <Link to={props.slug}>{props.title}</Link>
    </div>
  )
  export default PostItem
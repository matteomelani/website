import React from "react"
import styles from "./postItem.module.css"

const PostItem = props => (
    <div className={styles.postItem}>
        <h3 className={styles.title}>{props.title}</h3>
    </div>
  )
  export default PostItem
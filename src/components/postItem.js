import React from "react"
import { Link } from "gatsby"
import post from "../templates/post";

const PostItem = props => (
    <div className="post-item is-size-6">
      <Link to={props.slug}>{props.title}</Link>
    </div>
  )
  export default PostItem
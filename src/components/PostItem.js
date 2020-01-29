import React from 'react'
import { Link } from 'gatsby'

const PostItem = (props) => (
    <div className='is-size-6'>
      <Link to={props.slug}>{props.title}</Link>
    </div>
  )

export default PostItem
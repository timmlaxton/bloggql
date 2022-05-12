import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
      {post.card}
    {post.excerpt}
    </div>
  )
}

export default PostCard
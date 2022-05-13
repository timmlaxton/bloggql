import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  console.log(post)
  return (
    <div className='bg-black shadow-lg rounded-lg p-0 lg:p-8 pb-0 mb-1'>
    <div className='relative overflow-hidden shadow-md pb-80 '>
    <img
    src={post.featuredImage.url}
    alt={post.title}
    className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
    />
    </div>
    </div>
  )
}

export default PostCard
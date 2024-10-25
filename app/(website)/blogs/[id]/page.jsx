import React from 'react'
import BlogPost from '@/_components/Blogs/BlogPosts'

const blogspost = ({ params }) => {
  const paramss = {
    id: params.id
  }
  return (
    
    <BlogPost params={paramss}/>
  )
}

export default blogspost
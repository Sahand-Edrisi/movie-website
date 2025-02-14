import React from 'react'
import "./blog.css"
import BlogsItem from '../components/BlogsItem'
function Blog({data}) {
  return (
    <div className='blog' id='blog'>
              <div className="title">
        <div className="text">Our Blog</div>
        <div className="line"></div>
      </div>
      <div className="blogs">
        <BlogsItem data={data}/>
      </div>
    </div>
  )
}

export default Blog
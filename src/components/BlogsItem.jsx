import React from "react";
import "./blogsItem.css";
function BlogsItem({ data }) {
  return data.map((blog, index) => (
    <div className="container" key={index}>
      <img src={blog.thumbnail} alt="" />
      <div className="category">{blog.category}</div>
      <div className="title">{blog.title}</div>
      <div className="profile">
        <div className="img">
          <img src={blog.author.image} alt="" />
        </div>
        <div className="details">
          <div className="name">{blog.author.name}</div>
          <div className="date">{blog.date}</div>
        </div>
      </div>
    </div>
  ));
}

export default BlogsItem;

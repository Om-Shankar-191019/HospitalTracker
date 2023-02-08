import React,{ forwardRef }  from 'react'
import { useSelector } from 'react-redux';
import './BlogCard.css'
const BlogCard = forwardRef(({title,image,imgLink,videoLink,name,date,blogText},ref) => {
  const user = useSelector((state) => state.login.user);
  return (
    <div ref={ref} className='blogCard-container'>
        <div className='blog-title'>
            <h2>{title}</h2>
        </div>
        <div className='link-box'>
            <a href="#">See image here</a>
            <a href="#">See video here</a>
        </div>
        <div className='blog-image-box'><img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='' /></div>
        <div className='blogCard-name-box' >
            <p>Author : {name}</p>
            <span>{date}</span>
        </div>
        <div className='below-blog-box'>
            <p>{blogText}</p>
        </div>
    </div>
  )
})

export default BlogCard
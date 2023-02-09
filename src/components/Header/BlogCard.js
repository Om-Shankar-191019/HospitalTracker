import React,{ forwardRef }  from 'react'
import { useSelector } from 'react-redux';
import './BlogCard.css'
const BlogCard = forwardRef(({title,image,name,date,blogText},ref) => {
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
        <div className='blog-image-box'>{image && <img src={image} alt='' />}</div>
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
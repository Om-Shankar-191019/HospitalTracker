import React,{ forwardRef }  from 'react'
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import './ReviewCard.css'
const ReviewCard = forwardRef(({name,rating,review,date},ref) => {
  const user = useSelector((state) => state.login.user);
  return (
    <div ref={ref} className='reviewCard-container'>
        <div className='rating-wrapper' >
          <div className='top-review-box'>
                
                {/* <img src="https://www.w3schools.com/howto/img_avatar.png" alt='' /> */}
                <Avatar style={{cursor:'pointer',color:'white',backgroundColor:'rgb(63, 102, 184)',border:"1px solid rgb(63, 102, 184)"}} alt="me" >{name[0].toUpperCase()}</Avatar>
            <div className='reviewCard-name-box'>
                <p>{name}</p>
                <span>{date}</span>
            </div>
          </div>
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <div className='below-review-box'>
            <p>{review}</p>
        </div>
    </div>
  )
})

export default ReviewCard
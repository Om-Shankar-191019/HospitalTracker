import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from './ReviewCard'
import ReviewPostModal from './ReviewPostModal';
import './Reviews.css'
const Reviews = () => {
  return (
    <div className='reviews-container'>
        <button className='add-review' >
            <AddIcon style={{ fontSize: '38px' }} />
        </button>
        {/* <ReviewPostModal />  */}
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
    </div>
  )
}

export default Reviews
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from './ReviewCard'
import ReviewPostModal from './ReviewPostModal';
import './Reviews.css'
const Reviews = () => {
  return (
    <div className='reviews-container'>
        <button className='add-review' >
            <AddIcon className='addIcon-symbol'/>
        </button>
        <ReviewPostModal /> 
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
    </div>
  )
}

export default Reviews
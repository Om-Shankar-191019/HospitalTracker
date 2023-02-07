import React,{useState} from 'react'
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CircularProgress from '@mui/material/CircularProgress';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './ReviewPostModal.css'
const ReviewPostModal = () => {
    const [ratingValue,setRatingValue] = useState(2);
    const [reviewText,setReviewText] = useState("");
    console.log(ratingValue)
  return (
    <div  className='reviewPostModal-container'>
        <div>
            <p>Make a Review</p>
            <button><img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="" /></button>
        </div>
        <div className='rating-container'>
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                    setRatingValue(newValue);
                }}
            />
            <AgricultureIcon />
            <AgricultureIcon />
            <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      
    </Box>

    <AcUnitIcon />
        </Box>
        </div>
        <textarea 
            className='reviewTextArea' 
            placeholder='Write something about us' 
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            autoFocus
        >
        </textarea>
    </div>
  )
}

export default ReviewPostModal
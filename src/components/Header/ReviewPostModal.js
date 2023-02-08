import React,{useState} from 'react'
import Rating from '@mui/material/Rating';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { serverTimestamp } from "firebase/firestore";
import { Timestamp} from '@firebase/firestore';
import './ReviewPostModal.css'
const ReviewPostModal = ({showReviewPostModal , handleClose }) => {
    const [ratingValue,setRatingValue] = useState(2);
    const [reviewText,setReviewText] = useState("");
    // console.log(ratingValue)
    const user = useSelector((state) => state.login.user);
    const getDateTime = () =>{
        let today = new Date();
        let dateTime =  today.toLocaleString();
        return dateTime;
      }

      const getDateOnly = () =>{
        let today = new Date();
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        var onlyDate = today.toLocaleDateString('en-GB', options).replace(/\//g, '-');  
        return onlyDate;
      }
    const sendReviewPost = async (e) =>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "reviewPost"), {
              name:user.displayName,
              email:user.email,
              rating:ratingValue,
              review:reviewText,
              createdAt: getDateTime(),
              date:getDateOnly(),
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setReviewText("");
          handleClose(e);
    }

  return (
    <>
        {showReviewPostModal === "open" &&
        
        <div  className='reviewPostModal-container'>
            <div className='reviewPostModal-card'>
                <div className='reviewPost-top'>
                    <p>Make a Review</p>
                    <button onClick={handleClose} ><img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="" /></button>
                </div>
                <div className='rating-container'>
                    <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                    />

                    <textarea 
                        className='reviewTextArea' 
                        placeholder='Write something about us' 
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        autoFocus={true}
                    >
                    </textarea>

                    <button onClick={sendReviewPost} className='add-review-button'>Add review</button>
                </div>
            </div>
            
        </div>
        }
    </>
  )
}

export default ReviewPostModal
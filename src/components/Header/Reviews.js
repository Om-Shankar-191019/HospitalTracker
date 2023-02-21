import React,{ useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { query, collection, getDocs,orderBy ,onSnapshot} from "firebase/firestore"; 
import { db } from '../../firebase';
import FlipMove from 'react-flip-move';
import ReviewCard from './ReviewCard'
import ReviewPostModal from './ReviewPostModal';
import './Reviews.css'
const Reviews = () => {
  const [showReviewPostModal, setShowReviewPostModal] = useState("close");
  const [reviews, setReviews] = useState([]);

 
  // useEffect(() =>{
  //   const retriveData = async () =>{
  //     await getDocs(collection(db,"reviewPost"),orderBy("createdAt", "desc"))
  //       .then((querySnapshot) => {
  //         setReviews(querySnapshot.docs
  //           .map((doc) => ({...doc.data(),id:doc.id})))
  //       })
  //   }
  //    retriveData();
  // },[])


// useEffect(() => {
//   const fetchData = async () => {
//     const querySnapshot = await getDocs(collection(db, "reviewPost"));
//     const reviewArray = [];
//     querySnapshot.forEach((doc) => {
//       reviewArray.push({ id: doc.id, ...doc.data() });
//     });
//     setReviews(reviewArray);
//   };

//   fetchData();
// }, []);


// useEffect(() => {
//   const fetchData = async () => {
//     const q = query(collection(db, "reviewPost"))
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const reviewArray = [];
//       querySnapshot.forEach((doc) => {
//         reviewArray.push({ id: doc.id, ...doc.data() });
//       });
//       setReviews(reviewArray);
//     }); 
//   };

//   fetchData();
// }, []);

useEffect(() => {
  const fetchData = async () => {
    const reviewPostRef = collection(db, "reviewPost");
    const q = query(reviewPostRef,orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewArray = [];
      querySnapshot.forEach((doc) => {
        reviewArray.push({ id: doc.id, ...doc.data() });
      });
      setReviews(reviewArray);
    }); 
  };

  fetchData();
}, []);

  const handleClose = (e) =>{
    e.preventDefault();

    switch(showReviewPostModal){
      case "open" :
        setShowReviewPostModal("close");
        break;
      case "close" :
        setShowReviewPostModal("open");
        break;
      default:
        setShowReviewPostModal("close");
        break;
    }
  }
 

  return(
    <div className='reviews-container'>
        <button className='add-review' onClick={handleClose} >
            <AddIcon style={{ fontSize: '38px' }} />
        </button>
        <ReviewPostModal showReviewPostModal={showReviewPostModal} handleClose={handleClose}  /> 
        <FlipMove>
          {reviews && reviews.length > 0 && reviews.map(({ name,rating,review,date},i) =>
            <ReviewCard key={i} name={name} rating={rating} review={review} date={date}  /> 
          )}
        </FlipMove>
        

    </div>
  )
}

export default Reviews
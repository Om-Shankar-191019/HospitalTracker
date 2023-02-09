import React,{ forwardRef, useEffect,useState }  from 'react'
import { useSelector } from 'react-redux';
import { ref,getDownloadURL,listAll } from "firebase/storage";
import { storage } from '../../firebase';
import './BlogCard.css'
const BlogCard = ({title,name,date,blogText,image}) => {
  const user = useSelector((state) => state.login.user);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlList,setImageUrlList] = useState(null);
  // console.log(" image in card in each iteration ,",image);
  useEffect(() =>{
    getDownloadURL(ref(storage,`blogPostImages/${image}`))
    .then((url) => setImageUrl(url))
    .catch((error) => console.log(error))
  },[image])

  return (
    <div  className='blogCard-container'>
        <div className='blog-title'>
            <h2>{title}</h2>
        </div>
        <div className='link-box'>
            <a href="#">See image here</a>
            <a href="#">See video here</a>
        </div>
        <div className='blog-image-box'>{imageUrl && <img src={imageUrl} alt='' />}</div>
        <div className='blogCard-name-box' >
            <p>Author : {name}</p>
            <span>{date}</span>
        </div>
        <div className='below-blog-box'>
            <p>{blogText}</p>
        </div>
    </div>
  )
}

export default BlogCard
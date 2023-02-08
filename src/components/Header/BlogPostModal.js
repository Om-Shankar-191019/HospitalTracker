import React,{useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useSelector } from 'react-redux';

import './BlogPostModal.css'
const BlogPostModal = ({showBlogPostModal , handleClose }) => {
    const [blogText,setBlogText] = useState("");
    const [blogTitle,setBlogTitle] = useState("");
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
    const sendBlogPost = async (e) =>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "blogPost"), {
              name:user.displayName,
              blogText:blogText,
              title:blogTitle,
              createdAt: getDateTime(),
              date:getDateOnly(),
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setBlogText("");
          handleClose(e);
    }

  return (
    <>
        {showBlogPostModal === "open" &&
        
        <div className='blogPostModal-container'>
            <div className='blogPostModal-card'>
                <div className='blogPost-top'>
                    <p>Write a blog</p>
                    <button onClick={handleClose} ><img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="" /></button>
                </div>
                <div className='blogPostModal-image-box'><img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='' /></div>
                <div style={{display:'flex',justifyContent:'center'}}><input value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className='input blogPostModal-title' type='text' placeholder=' TITLE ...'></input></div>
                <div>
                    <textarea 
                        className='blogTextArea' 
                        placeholder='Write your blog here' 
                        value={blogText}
                        onChange={(e) => setBlogText(e.target.value)}
                        autoFocus={true}
                    >
                    </textarea>
                </div>
                
                <div className='btns-container'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <div style={{marginRight:"10px"}}  className='add-blog-button'><input type='file' /></div>
                        <button style={{marginRight:"10px"}}  className='add-blog-button'>Img Link</button>
                        <button style={{marginRight:"10px"}}  className='add-blog-button'>Video Link</button>
                    </div>
                    <button onClick={sendBlogPost} className='add-blog-button' disabled={!blogText ? true : false}>Publish</button>
                </div>
                
            </div>
        </div>
        }
    </>
  )
}

export default BlogPostModal
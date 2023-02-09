import React,{useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { uploadBytes,ref,getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { useSelector } from 'react-redux';


import './BlogPostModal.css'
const BlogPostModal = ({showBlogPostModal , handleClose }) => {
    const [blogText,setBlogText] = useState("");
    const [blogTitle,setBlogTitle] = useState("");
    const [shareImage,setShareImage] = useState("");
    const user = useSelector((state) => state.login.user);

    const uploadImageFile = async () =>{
      if (!shareImage) return;
      const imageRef = ref(storage, `blogPostImages/${shareImage.name}${getDateOnly()}`);
      await uploadBytes(imageRef,shareImage).then((snapshot) =>{
        console.log(" upload bytes ")
      })
    }

    const handleShareImage = (e) =>{
      const image = (e.target.files[0]);
      // console.log(image)
      if(image === "" || image === undefined){
        alert(`not an image , the file is a ${typeof image}`);
        return;
      }

      setShareImage(image);
      
    }

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
            await uploadImageFile();
            console.log(" not awaited: ,")
            const docRef = await addDoc(collection(db, "blogPost"), {
              name:user.displayName,
              blogText:blogText,
              title:blogTitle,
              image:`${shareImage && shareImage.name}${shareImage && getDateOnly()}`,
              createdAt: getDateTime(),
              date:getDateOnly(),
            });
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          setBlogText("");
          setBlogTitle("");
          setShareImage("");
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
                <div className='blogPostModal-image-box'>
                  <input type="file" accept="image/gif, image/jpeg, image/png" name="image" id="shareImageInput" style={{display:"none"}} onChange={handleShareImage}/>
                  {/* <p><label htmlFor='shareImageInput' >Select an image to share</label></p> */}
                  {shareImage && <img src={URL.createObjectURL(shareImage)} />}
                </div>
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
                        {/* <div style={{marginRight:"10px"}}  className='add-blog-button'><input type='file' /></div> */}
                        {/* <button style={{marginRight:"10px"}}  className='add-blog-button'>Img Link</button> */}
                        {/* <button htmlFor='shareImageInput' style={{marginRight:"10px"}}  className='add-blog-button'>img</button> */}
                        <p><label htmlFor='shareImageInput' className='add-blog-button' >img</label></p>
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
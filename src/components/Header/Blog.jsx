import React,{ useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { query, collection,orderBy ,onSnapshot} from "firebase/firestore"; 
import { db } from '../../firebase';
import FlipMove from 'react-flip-move';
import BlogCard from './BlogCard';
import BlogPostModal from './BlogPostModal';
import './Blog.css'
const Blog = () => {
  const [showBlogPostModal, setShowBlogPostModal] = useState("close");
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogPostRef = collection(db, "blogPost");
      const q = query(blogPostRef,orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const blogArray = [];
        querySnapshot.forEach((doc) => {
          blogArray.push({ id: doc.id, ...doc.data() });
        });
        setBlog(blogArray);
      }); 
    };

    fetchData();
  }, []);

  const handleClose = (e) =>{
    e.preventDefault();

    switch(showBlogPostModal){
      case "open" :
        setShowBlogPostModal("close");
        break;
      case "close" :
        setShowBlogPostModal("open");
        break;
      default:
        setShowBlogPostModal("close");
        break;
    }
  }
 
  
  const image="https://content.jdmagicbox.com/comp/patna/a9/0612px612.x612.180818104508.c6a9/catalogue/hi-tech-emergency-hospital-saguna-more-patna-hospitals-tpw1uaiovb.jpg?clr=";
 
  return(
    <div className='blog-container'>
        <button className='add-blog-plus' onClick={handleClose} >
            <AddIcon style={{ fontSize: '38px' }} />
        </button>
        <BlogPostModal showBlogPostModal={showBlogPostModal} handleClose={handleClose}  /> 
        <FlipMove>
          {blog && blog.length > 0 && blog.map(({ name,title,date,blogText},i) =>
            <BlogCard key={i} title={title} image={image}  name={name} date={date} blogText={blogText} /> 
          )}
        </FlipMove>
        {/* <BlogCard title={title} image={image} imgLink={imgLink} videoLink={videoLink} name={name} date={date} blogText={blogText} />
        <BlogCard title={title} image={image}  name={name} date={date} blogText={blogText} />
        <BlogCard title={title} image={image} imgLink={imgLink} videoLink={videoLink} name={name} date={date} blogText={blogText} /> */}
        

    </div>
  )
}

export default Blog
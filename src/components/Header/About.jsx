import React,{ useState, useEffect } from 'react'
import './About.css';

import { uploadBytes,ref,getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';

const About = () => {
  const [imageUpload,setImageUpload] = useState(null);

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
  const uploadFile = () =>{
    if (imageUpload == null) return;
    const imageRef = ref(storage, `blogPostImages/${imageUpload.name}${getDateOnly()}`);
    uploadBytes(imageRef,imageUpload).then((snapshot) =>{
      // console.log(" uploaded : ", snapshot);
    })

  }

  const getImageFromCloud = () =>{
    getDownloadURL(ref(storage,`blogPostImages/${imageUpload.name}${getDateOnly()}`))
      .then((url) => console.log(url))
      .catch((error) => console.log(error))
  }
  return (
    <div className='about-container'>
      {/* <div className="left-column">
        <h1>About Us</h1>
        <p>
                    This a Website were You will see the hospital of 
                    the town tagged on the Map . This will help you 
                    locate the exact location of the Hospital which you 
                    are exactly looking for without any noise . We are 
                    only focusing on hospital tagging on map so it will
                    overall cut the all the noises which we usually see on 
                    other maps website and it will save the time which will
                    indirectly/directly save the time of the patient and 
                    eventually it will save the life of the Patient. 

        </p>
      </div>
      <div className="right-column">
          <img src="https://static.planetminecraft.com/files/image/minecraft/project/2020/041/13140481-hospitalwallpaper_l.webp" alt="" />
      </div> */}


      <div >
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <button onClick={getImageFromCloud}> get Image</button>
      {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
    </div>

    </div>
  )
}

export default About
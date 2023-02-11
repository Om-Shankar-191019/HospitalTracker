import React from 'react'
import { useDispatch } from 'react-redux';
import { putCurrentPin } from '../../features/hospitalSlice';
import './HospitalPiece.css'
const HospitalPiece = ({name,keyId,expandedId,onClick,latitude,longitude,tags}) => {
  const dispatch = useDispatch();
  const clinicDialog = [

    "Get the care you deserve, right in your neighborhood.",
    "Say goodbye to long wait times and hello to personalized care.",
    "Small clinic, big on quality.",
    "Where convenience meets affordability.",
    "Healthcare tailored to your needs, just a short drive away.",
    "A Better Way to Get the Care You Need.",
    "Your One-Stop Shop for Comprehensive Healthcare Services.",
    "Affordable, Accessible Healthcare for Your Whole Family.",
    "Experience the Benefits of Personalized Care.",
    "Your Health is Our Priority: The Advantages of Choosing a Small Clinic."
    ];

    const getRandom = (first,last) => {
      let r = Math.random()*(last+1-first);
      return(Math.floor(r)+first)
    }

    const writeQuotes = () =>{
      let index = getRandom(0,clinicDialog.length);
      return clinicDialog[index];
    }

    const dispatchCurrentPin = () =>{
      if(latitude && longitude)
        dispatch(putCurrentPin({lat:latitude,lon:longitude}))
    }
 
  return (
    <div className={`hospitalPiece-container ${expandedId === keyId ? "expanded" : ""}`} onClick={onClick}>
        
        {expandedId !== keyId ? 
          <>
            <img src='https://cdn-icons-png.flaticon.com/128/3580/3580415.png' alt="" />
            <p>{name}</p>
          </>
          :
          <div className='hospital-card-container'>
            <h3 style={{marginBottom:'12px'}}>{name}</h3>
            <div className='flex-center'  >
              <p style={{color:'green'}}>{!tags && writeQuotes()}</p>
            </div>
            <p className="color-blue" style={{marginBottom:'10px',color:'darkblue'}}>{tags && tags["addr:full"]}</p>
            <div className='flex-center' >
              <p>{tags && tags["addr:street"]}</p>
              <p>{tags && tags["addr:city"]}</p>
            </div>
            <div className='flex-center' >
              <p>{tags && tags["addr:district"]}</p>
              <p>{tags && tags["addr:state"]}</p>
            </div>
            <div className='flex-center' >
              <p>{tags && tags["addr:postcode"]}</p>
            </div>
            <div className='flex-center' >
              <p>{latitude}</p>
              <p>{longitude}</p>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'18px'}}>
              <button onClick={dispatchCurrentPin} style={{marginRight:"10px"}}  className='add-blog-button'>Pin to map</button>
              {/* <button style={{marginRight:"10px"}}  className='add-blog-button'>Direction</button> */}
            </div>
            

          </div>
        }
        {/* {tags && console.log("printing tags : ",tags["addr:district"])}
        {tags && console.log("printing tags : ",tags["addr:state"])} */}
        
    </div>
  )
}

export default HospitalPiece









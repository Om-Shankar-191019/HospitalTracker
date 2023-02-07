import React from 'react'
import './TopHospitalCard.css'


const TopHospitalCard = ({name,description,address,establish,beds,website_url,image}) => {
  return (
    <div className='hospital-card'>
      <div className='left'>
          <img alt='hospital-poster' src={image} />
      </div>
      <div className='right'>
          <div className='title'>{name}</div>
          <div className='description'>{description}</div>
          <div className='address'>{address}</div>
          <div style={{display:'flex',color:'rgba(20, 20, 131, 0.557)'}} >
            <div className='establish'>{establish}</div>
            <div className='beds'>{beds}</div>
          </div>
          <div className='website'>
            <a href={website_url} ><button className='website-button' >Visit Website</button></a>
          </div>
      </div>
    </div>
  )
}

export default TopHospitalCard
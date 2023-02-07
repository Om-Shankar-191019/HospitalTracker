import React from 'react'
import TopHospitalCard from './TopHospitalCard';
import './TopHospitals.css'
import TopHospitalsData from '../../assets/top-hospitals-data';
const TopHospitals = () => {

  
  return (
    <div className='tophospitals-container'>
      {TopHospitalsData.map((item,index) => (
        <TopHospitalCard 
          key={index}
          name={item.name}
          description={item.description} 
          address={item.address}
          establish={item.establish}
          beds={item.beds}
          website_url={item.website_url}
          image={item.img}  />
      ))}
    </div>
  )
}

export default TopHospitals
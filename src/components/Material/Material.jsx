import React from 'react'
import BasicSelect from './BasicSelect'
import HospitalPiece from './HospitalPiece'
import { useSelector } from 'react-redux'
import './Material.css'

const Material = () => {
  const hospitalInfo = useSelector((state) => state.hospital.info);
  // console.log("info : " , hospitalInfo);
  return (
    <div className='material-container'>
      <BasicSelect />
      <div className='hospitalPiece-wrapper'>
        {hospitalInfo && hospitalInfo.length > 0 &&  hospitalInfo.map((item) => 
            <HospitalPiece key={item.id} name={item.tags  ? item.tags.name ? item.tags.name : "clinic" : "clinic" } />
          )
        }
      </div>
     
    </div>
  )
}

export default Material

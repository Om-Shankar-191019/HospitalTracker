import React, { useState } from 'react'
import BasicSelect from './BasicSelect'
import HospitalPiece from './HospitalPiece'
import { useSelector } from 'react-redux'
import './Material.css'

const Material = () => {
  const hospitalInfo = useSelector((state) => state.hospital.info);
  const [expandedId,setExpandedId] = useState(null);

 
  return (
    <div className='material-container'>
      <BasicSelect />
      <div className='hospitalPiece-wrapper'>
        {hospitalInfo && hospitalInfo.length > 0 &&  hospitalInfo.map((item) => 
            <HospitalPiece key={item.id} keyId={item.id} expandedId={expandedId} onClick={() => setExpandedId(expandedId === item.id ? null : item.id)} name={item.tags  ? item.tags.name ? item.tags.name : "clinic" : "clinic" } />
          )
        }
      </div>
     
    </div>
  )
}

export default Material

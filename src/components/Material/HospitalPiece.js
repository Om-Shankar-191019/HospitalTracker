import React from 'react'
import './HospitalPiece.css'
const HospitalPiece = ({name}) => {
  return (
    <div className='hospitalPiece-container'>
        <img src='https://cdn-icons-png.flaticon.com/128/3580/3580415.png' alt="" />
        <p>{name}</p>
        
    </div>
  )
}

export default HospitalPiece
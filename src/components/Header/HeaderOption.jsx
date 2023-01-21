import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderOptions.css'
const HeaderOption = ({title,route}) => {
  return (
    <Link to={route} style={{textDecoration:'none'}} >
        <div className='headerOption'>
            <span className='headerOption_title'>{title}</span>
        </div>  
    </Link>
  )
}

export default HeaderOption
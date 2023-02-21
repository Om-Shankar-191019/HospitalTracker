import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './HeaderOptions.css'
const HeaderOption = ({title,route}) => {
  return (
    <NavLink to={route} style={{textDecoration:'none'}} activeclassName="active">
        <div className='headerOption'>
            <span className='headerOption_title'>{title}</span>
        </div>  
    </NavLink>
  )
}

export default HeaderOption
import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({onClick}) => {
  return (
    <div className='sidebar-container'>
        <Link to="/" style={{textDecoration:'none'}} >
            <div onClick={onClick} className='navTag-div'>
                <span className='navTag-span'>Home</span>
            </div>   
        </Link>
        <Link to="/about" style={{textDecoration:'none'}} >
            <div onClick={onClick} className='navTag-div'>
                <span className='navTag-span'>About</span>
            </div>   
        </Link>
        <Link to="/tophospitals" style={{textDecoration:'none'}} >
            <div onClick={onClick} className='navTag-div'>
                <span className='navTag-span'>Top Hospitals</span>
            </div>   
        </Link>
        <Link to="/reviews" style={{textDecoration:'none'}} >
            <div onClick={onClick} className='navTag-div'>
                <span className='navTag-span'>Reviews</span>
            </div>   
        </Link>
        <Link to="/blog" style={{textDecoration:'none'}} >
            <div onClick={onClick} className='navTag-div'>
                <span className='navTag-span'>Blogs</span>
            </div>   
        </Link>
    </div>
  )
}

export default Sidebar
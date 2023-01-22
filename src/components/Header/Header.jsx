import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Header.css';
import HeaderOption from './HeaderOption';
const Header = () => {
  return (
    <div className='header-container'>
        <img src='https://img.freepik.com/free-vector/logo-with-cross-leaf_1057-2135.jpg?size=338&ext=jpg' alt='logo' />
        <div className='nav-bar'>
          <HeaderOption route="/" title="Home" />
          <HeaderOption route="/about" title="About" />
          <HeaderOption route="/tophospitals" title="Top Hospitals" />
          <HeaderOption route="/blog" title="Blog" />
          <Avatar style={{cursor:'pointer'}} alt="me" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
    </div>
  )
}

export default Header
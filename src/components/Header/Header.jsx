import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import './Header.css';
import HeaderOption from './HeaderOption';
import symbolImage from '../../assets/logo.png';
const Header = () => {
  const user = useSelector((state) => state.login.user);
  // console.log(" user Hia ", user);
  return (
    <div className='header-container'>
        <img src={symbolImage} alt='' />
        <div className='nav-bar'>
          <HeaderOption route="/" title="Home" />
          <HeaderOption route="/about" title="About" />
          <HeaderOption route="/tophospitals" title="Top Hospitals" />
          <HeaderOption route="/reviews" title="Reviews" />
          <HeaderOption route="/blog" title="Blog" />
          <Avatar style={{cursor:'pointer'}} alt="me" src={user?.photoURL}>{user?.displayName[0].toUpperCase()}</Avatar>
        </div>
    </div>
  )
}

export default Header
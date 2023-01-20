import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
        <img src='https://img.freepik.com/free-vector/logo-with-cross-leaf_1057-2135.jpg?size=338&ext=jpg' alt='logo' />
        <div className='nav-bar'>
            <h1 style={{color:'white'}}>Welcome To Hospital-Tagging</h1>
        </div>
    </div>
  )
}

export default Header
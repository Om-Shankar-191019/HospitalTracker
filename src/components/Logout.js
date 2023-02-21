import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/loginSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import './Logout.css'
const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () =>{
    dispatch(logout());
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='logout-container'>
  
        <div onClick={handleLogout} className='logout-wrapper'>
          <p>Logout</p>
        </div>
 

    </div>
  )
}

export default Logout
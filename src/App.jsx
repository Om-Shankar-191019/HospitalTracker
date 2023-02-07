import React,{ useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from './features/loginSlice';
import { auth } from './firebase';
import { selectUser } from './features/loginSlice';
import Header from './components/Header/Header';
import About from './components/Header/About';
import TopHospitals from './components/Header/TopHospitals';
import Blog from './components/Header/Blog';
import Home from './components/Home';
import Login from './components/Login';
import Reviews from './components/Header/Reviews';
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() =>{
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
              email:userAuth.email,
              uid:userAuth.uid,
              displayName:userAuth.displayName,
          })
        )
       
      } else {
        dispatch(logout());
      }
    });
  }, [])

  return (
    <>
      {
        !user ? <Login /> : 
        <div className='app-container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tophospitals" element={<TopHospitals />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      }
    </>
  )
}



export default App
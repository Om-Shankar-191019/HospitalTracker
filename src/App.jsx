import React,{ useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/Header/About';
import TopHospitals from './components/Header/TopHospitals';
import Blog from './components/Header/Blog';
import Home from './components/Home';
import Login from './components/Login';
import './App.css'

const App = () => {
  const [loginFlag, setLoginFlag] = useState(false);
  return (
    <>
      {
        !loginFlag ? <Login /> : 
        <div className='app-container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tophospitals" element={<TopHospitals />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      }
    </>
  )
}



export default App
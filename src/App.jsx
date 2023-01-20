import React from 'react';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Material from './components/Material/Material';
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
        <Header />
        <div className='mapping-box'>
            <Material />
            <Map />
        </div>
    </div>
  )
}

export default App
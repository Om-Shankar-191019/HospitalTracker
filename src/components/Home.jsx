import React from 'react'
import Material from './Material/Material'
import Mapping from './Map/Mapping'
import Mapbox from './Map/Mapbox'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container' >
        <Material />
        <Mapping />
    </div>
  )
}

export default Home
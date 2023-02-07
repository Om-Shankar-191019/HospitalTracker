import React from 'react'
import Material from './Material/Material'
import Mapping from './Map/Mapping'
import Mapbox from './Map/Mapbox'
const Home = () => {
  return (
    <div style={{display:'flex'}}>
        <Material />
        <Mapping />
    </div>
  )
}

export default Home
import React from 'react'
import {MapProvider} from 'react-map-gl';
import Mapping from './Mapping';
import Controls from './Controls';
const Mapbox = () => {
  return (
    <MapProvider>
      <Controls />
      <Mapping />
    </MapProvider>
  )
}

export default Mapbox
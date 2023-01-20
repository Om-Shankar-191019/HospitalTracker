import React from 'react';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Material from './components/Material/Material';

const App = () => {
  return (
    <div>
        <Header />
        <div>
            <Material />
            <Map />
        </div>
    </div>
  )
}

export default App
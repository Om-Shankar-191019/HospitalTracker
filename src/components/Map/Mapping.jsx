import React,{useState,useEffect} from 'react'
import axios from 'axios';

import SearchIcon from '@mui/icons-material/Search';
import Map,{Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { putInfo,putCurrentPinToNull } from '../../features/hospitalSlice';

import './Mapping.css'

const Mapping = () => {
  const searchCategory = useSelector((state) => state.hospital.category);
  const hospitalInfo = useSelector((state) => state.hospital.info);
  const currentPin = useSelector((state) => state.hospital.currentPin);
  const dispatch = useDispatch();
  // const [userLocation,setUserLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // const [radiusSearch,setRadiusSearch] = useState(null);
  const [currentHospitals,setCurrentHospitals] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: 78.8718,
    latitude: 21.7679,
    zoom: 3
  });

  useEffect(() =>{
    if(currentHospitals && currentHospitals.length > 0  && !currentPin){
      setViewState({
        latitude: currentHospitals[0].lat,
        longitude: currentHospitals[0].lon,
        zoom: 12,
      })
    }
    else if( currentPin ){
      setCurrentHospitals(null);
      setViewState({
        latitude: currentPin.lat,
        longitude: currentPin.lon,
        zoom: 14,
      })
    }
  },[currentHospitals,currentPin])

 

  // const getUserLocation = async () =>{
  //   let UserLocation = null;
  //   if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) =>{
  //         UserLocation = {"latitude": position.coords.latitude,"longitude": position.coords.longitude}
  //         return UserLocation;
  //       });
  //     } else {
  //         alert("Geolocation is not supported by this browser.");
  //     }
  // }

  const getUserLocation = async () => {
    return new Promise ((resolve,reject) =>{
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
        },
        (error) => {
          reject(error);
        }
      )
    })
  }

  
  const getDistanceBasedData = async () =>{
    let radiusSearch = null;
    if(!searchTerm){
      alert("No input is made!")
    }else{
      let num = Number(searchTerm);
      if(isNaN(num))
        alert('Wrong Input. The input entered is not a number.')
      else
        radiusSearch = num;
    }

    try{
      let userLocation = await getUserLocation();
      if(radiusSearch && userLocation){
        const overpassUrl = "http://overpass-api.de/api/interpreter";
        const query = `[out:json];node["amenity"="hospital"](around:${radiusSearch},${userLocation.latitude},${userLocation.longitude});out;`;
              
        return fetch(overpassUrl + "?data=" + query)
        .then((response) => response.json())
        .then((data) => {
          dispatch(putCurrentPinToNull())
          setCurrentHospitals(data.elements);
          dispatch(putInfo(data.elements))
        })
        .catch(() => alert("no data available !!"))
      }
    
    } catch (error) {
      alert(error.message || "Unable to get user location ");
    }
  }

  

  async function getBoundingBox(city) {
    try{
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${city}, India&format=json`);
      const data = response.data[0];
      return [parseFloat(data.boundingbox[0]), parseFloat(data.boundingbox[2]), parseFloat(data.boundingbox[1]), parseFloat(data.boundingbox[3])];
    }catch (error) {
      alert("The input might be wrong . Check spelling ..");
    }
  }

  const getCityBasedData = async () =>{
    const overpassAPI = 'https://overpass-api.de/api/interpreter';
    let bbox = [];
    await getBoundingBox(searchTerm).then(boundingBox => {
          bbox = boundingBox;
        });

    const query = `
    [out:json];
    (node["amenity"="hospital"](${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]});
    way["amenity"="hospital"](${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]});
    );
    out body;
    >;
    out skel qt;
    `;

    return fetch(overpassAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${query}`
    })
      .then(response => response.json())
      .then(data => {
        const hospitals = data.elements
        
        setCurrentHospitals(hospitals);
        dispatch(putInfo(hospitals))
        dispatch(putCurrentPinToNull())
      })
      .catch(error => {
        alert(`Error fetching hospitals data:`, error);
      });
    }

  // const handleFlyTo = async () =>{
  //   if(currentHospitals && currentHospitals.length > 0 )
  //   setViewState({
  //     latitude: currentHospitals[0].lat,
  //     longitude: currentHospitals[0].lon,
  //     zoom: 12,
  //   })
  //   console.log("setting view to pan ", currentHospitals);
  // }


  const getSearchData = async (e) =>{
    if(e.keyCode === 13 ){
      if(searchCategory === "city" || searchCategory === "district" || searchCategory === "state" ){
        await getCityBasedData();
        // console.log("first city ")
      }
      else if(searchCategory === "radius"){
        await getDistanceBasedData();
        // console.log("first dist  ")
      }
      
    }
  }

  


  // console.log(currentHospitals)

  return (
    <div className='map-wrapper'>
    {/* <button onClick={handleFlyTo}>fly to new york</button> */}
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <div className='search-input-container'>
          <SearchIcon style={{marginLeft:'8'}} />
          
            <input onKeyDown={getSearchData} className="search-input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  placeholder='search...'  />
         
        </div>
        <Marker longitude={78.014} latitude={21.780} color="rgb(24, 181, 39,0.4)" />
        {currentPin &&
           <Marker longitude={currentPin.lon} latitude={currentPin.lat} color="red" /> 
        }

        <GeolocateControl position='top-left' trackUserLocation enableHighAccuracy={true}  />

        {currentHospitals && 
          currentHospitals.map((item) => 
          {if(item.lat && item.lon){
            return <Marker key={item.id} longitude={parseFloat(item.lon)} latitude={ parseFloat(item.lat)} color="rgb(63, 102, 184,0.78)" />
            }
          }
        ) 
        } 

      </Map>  
    </div>
  );
}

export default Mapping
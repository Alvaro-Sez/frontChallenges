import React, {useState, useEffect} from 'react'
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';


export default function MapRender (props){
  const [center,setCenter] = useState({lat:'41.38879',lng:'2.15899'})
  
  useEffect(()=>{
      setCenter({lat:props.lat, lng:props.lng})
  },[props])

  return(
    <Map center={{lat:center.lat || '41.38879', lng:center.lng || '2.15899'}} zoom={12}>
      <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      <Markers lat={props.lat} lng={props.lng}/>
    </Map>
  )
}
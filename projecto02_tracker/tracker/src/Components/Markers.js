import React, {useState, useEffect} from 'react'
import {Marker} from 'react-leaflet'
import IconLoc from './IconLoc'
import 'leaflet/dist/leaflet.css';

const Markers = (props) =>{
  const [center,setCenter] = useState(({lat:'41.38879',lng:'2.15899'}))
 
  useEffect(()=>{
    setCenter({lat:props.lat, lng:props.lng})
  },[props])

  return(
    <Marker position={{lat:center.lat || '41.38879', lng:center.lng || '2.15899'}} icon={IconLoc}/>
  )
}

export default Markers
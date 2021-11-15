import React, {useState, useRef} from 'react';
import {IpInput, Submit, Interface, Datalist, PanelDiv} from './Styles';
import MapRender from './map';
import 'leaflet/dist/leaflet.css';

export default function GetLocation(){
  const [lat,setLat] = useState(null)
  const [lng,setLng] = useState(null)
  const [city,setCity] = useState({city:'Barcelona',country:'ES',postalCode:'08020',timezone:'+02:00'})
  const [ip,setIp] = useState('- - - -')
  const [isp,setIsp] = useState('- -')
  let ipInput = useRef()
  
  const handleSubmit = () => {
    getData(ipInput.current.value)
  } 
  
  const getData = async (url) => {
    const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_MjS23HmMhoGBadGjxAC2s9FRBdh2f&ipAddress=${url}`)

    const location = await data.json()
    console.log(location)
    console.log(`latitud: ${location.location.lat}, longitud:${location.location.lng}`)
    setLat(location.location.lat)
    setLng(location.location.lng)
    setCity(location.location)
    setIp(url)
    setIsp(location.isp)
  }


 return(
   <>
    <Interface>
    <IpInput ref={ipInput} placeholder='Search for any IP adress or domain'/>
    <Submit onClick={handleSubmit}/>
    </Interface>
    <Datalist>
      <PanelDiv><h5>IP ADDRESS</h5><p>{ip}</p></PanelDiv>
      <PanelDiv><h5>LOCATION</h5><p>{city.city},{city.country} {city.postalCode}</p></PanelDiv>
      <PanelDiv><h5>TIMEZONE</h5><p>{city.timezone}</p></PanelDiv>
      <PanelDiv><h5>ISP</h5><p>{isp}</p></PanelDiv>
    </Datalist>
    <MapRender lat={lat} lng={lng}></MapRender>
  </>
 ) 
}



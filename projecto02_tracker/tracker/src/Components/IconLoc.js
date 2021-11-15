import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconLogo from '../images/icon-location.svg'

const IconLoc = L.icon({
  iconUrl: iconLogo,
  iconRetinaUrl: iconLogo,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35,45],
  className: 'leaflet-venue-icon'
})


export default IconLoc
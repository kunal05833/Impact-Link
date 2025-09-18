import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'

/* Fix default icon paths for Vite */
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

const MapView = ({ opportunities }) => {
  const defaultCenter = [20.5937, 78.9629]
  const locations = [
    { id: 1, position: [28.6139, 77.2090], city: 'Delhi', count: 45 },
    { id: 2, position: [19.0760, 72.8777], city: 'Mumbai', count: 38 },
    { id: 3, position: [12.9716, 77.5946], city: 'Bangalore', count: 52 },
    { id: 4, position: [13.0827, 80.2707], city: 'Chennai', count: 23 },
    { id: 5, position: [22.5726, 88.3639], city: 'Kolkata', count: 31 },
  ]

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={defaultCenter} zoom={5} className="h-full w-full" scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position}>
            <Popup>
              <Card className="border-0 shadow-none p-2">
                <h3 className="font-semibold text-sm flex items-center"><MapPin size={14} className="mr-1"/>{loc.city}</h3>
                <p className="text-xs mt-1">Opportunities: <Badge variant="default">{loc.count}</Badge></p>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
export default MapView
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Briefcase, Clock } from 'lucide-react'

const MapView = ({ opportunities }) => {
  // Default center (India)
  const defaultCenter = [20.5937, 78.9629]
  
  // Custom marker icon
  const customIcon = new Icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })

  // Sample locations with opportunities
  const locations = [
    { id: 1, position: [28.6139, 77.2090], city: 'Delhi', count: 45 },
    { id: 2, position: [19.0760, 72.8777], city: 'Mumbai', count: 38 },
    { id: 3, position: [12.9716, 77.5946], city: 'Bangalore', count: 52 },
    { id: 4, position: [13.0827, 80.2707], city: 'Chennai', count: 23 },
    { id: 5, position: [22.5726, 88.3639], city: 'Kolkata', count: 31 },
  ]

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={defaultCenter}
        zoom={5}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={customIcon}
          >
            <Popup>
              <Card className="border-0 shadow-none">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {location.city}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Opportunities</span>
                      <Badge variant="default">{location.count}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Organizations</span>
                      <span className="font-medium">{Math.floor(location.count / 3)}</span>
                    </div>
                  </div>
                  <button className="mt-3 w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View All →
                  </button>
                </div>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView
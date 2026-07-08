import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Default Leaflet marker icons reference bundled assets that Vite doesn't
// resolve automatically — point them at the CDN instead.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function WeatherMap({ center = [26.9124, 75.7873], markers = [] }) {
  const points = markers.length ? markers : [{ name: 'Current location', position: center, temp: null }]

  return (
    <div className="glass-card overflow-hidden">
      <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ height: '420px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p) => (
          <Marker key={p.name} position={p.position}>
            <Popup>
              <strong>{p.name}</strong>
              {p.temp != null && <div>{p.temp}°C</div>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

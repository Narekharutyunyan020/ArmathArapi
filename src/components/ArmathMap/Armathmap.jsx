import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Armathmap.module.scss';

const locations = [
  { lat: 40.1792, lng: 44.4991, title: "Երևան" },
  { lat: 40.7893, lng: 43.8475, title: "Գյումրի" },
   { lat: 40.7915, lng: 43.8413, title: "Արմաթ Առափի, Գյումրի" },
];

export default function ArmathMap() {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[40.1792, 44.4991]}
        zoom={7}
        className={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]}>
            <Popup>{loc.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

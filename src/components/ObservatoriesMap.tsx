
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface Observatory {
  name: string;
  location: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
}

interface ObservatoriesMapProps {
  observatories: Observatory[];
}

const ObservatoriesMap = ({ observatories }: ObservatoriesMapProps) => {
  const defaultCenter: LatLngExpression = [20, 0];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={2}
      style={{ 
        height: '500px', 
        width: '100%',
        borderRadius: '0.5rem',
        backgroundColor: '#242f3e'
      }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {observatories.map((observatory) => {
        const position: LatLngExpression = [observatory.coordinates[1], observatory.coordinates[0]];
        return (
          <Marker
            key={observatory.name}
            position={position}
            icon={DefaultIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="text-lg font-bold text-gray-900">{observatory.name}</h3>
                <p className="text-sm text-gray-600">{observatory.description}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default ObservatoriesMap;

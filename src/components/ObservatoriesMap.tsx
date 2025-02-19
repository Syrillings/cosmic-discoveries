
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

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
  const [selectedObservatory, setSelectedObservatory] = useState<Observatory | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem'
  };

  const center = {
    lat: 20,
    lng: 0
  };

  const options = {
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    disableDefaultUI: false,
    zoomControl: true,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={options}
      >
        {observatories.map((observatory) => (
          <Marker
            key={observatory.name}
            position={{ lat: observatory.coordinates[1], lng: observatory.coordinates[0] }}
            onClick={() => setSelectedObservatory(observatory)}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#FFD700",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: "#FFD700",
            }}
          />
        ))}

        {selectedObservatory && (
          <InfoWindow
            position={{
              lat: selectedObservatory.coordinates[1],
              lng: selectedObservatory.coordinates[0]
            }}
            onCloseClick={() => setSelectedObservatory(null)}
          >
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900">{selectedObservatory.name}</h3>
              <p className="text-sm text-gray-600">{selectedObservatory.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default ObservatoriesMap;

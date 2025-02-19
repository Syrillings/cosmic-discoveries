
import React, { useEffect, useRef } from 'react';
//import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJ5b3VyLXRva2VuIn0.your-public-token';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: 1.5,
      center: [0, 20],
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each observatory
    observatories.forEach((observatory) => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h3 style="color: #000; font-weight: bold;">${observatory.name}</h3>
          <p style="color: #333;">${observatory.description}</p>
        `);

      new mapboxgl.Marker({ color: '#FFD700' })
        .setLngLat(observatory.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [observatories]);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default ObservatoriesMap;
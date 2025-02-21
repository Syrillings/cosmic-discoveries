import React, { useEffect, useRef, useState } from "react";
import Loader from "@/components/common/Loader";

const MapEmbed = ({ place }) => {
  const mapRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeMap = () => {
      if (mapRef.current) {
        const mapFrame = mapRef.current;
        mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(
          place
        )}&output=embed`;
      }
    };
//Someone ha to re-write this fr
    initializeMap();
  }, [place]);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <Loader className="" /> loading map...
        </div>
      )}
      <div className="w-full h-[500px] max-lg:rounded-lg  overflow-hidden">
        <iframe
          ref={mapRef}
          title="Google Map"
          className="w-full h-full"
          allowFullScreen
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;

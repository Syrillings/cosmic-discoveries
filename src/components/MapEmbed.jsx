import React, { useEffect, useRef } from "react";

const MapEmbed = ({place}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = () => {
      if (mapRef.current) {
        const mapFrame = mapRef.current;
        mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(
          place
        )}&output=embed`;
      }
    };

    initializeMap();
  }, [place]);

  return (
    <div className="">
      <div className="w-full h-[500px] max-lg:rounded-lg  overflow-hidden">
        <iframe
          ref={mapRef}
          title="Google Map"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;

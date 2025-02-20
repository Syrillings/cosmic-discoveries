
import { useEffect, useState } from "react";
import Counter from "./VisitorCount"

const LiveTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState<string>("Loading location...");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=YOUR_API_KEY`
            );
            const data = await response.json();
            setLocation(`${data[0].name}, ${data[0].country}`);
          } catch (error) {
            setLocation("Location unavailable");
          }
        },
        () => {
          setLocation("Location access denied");
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  return (
        <div className="fixed bottom-0 left-0 w-full bg-cosmic-muted/80 backdrop-blur-md border-t border-white/10 py-2">
      <div className="animate-ticker whitespace-nowrap">
        <span className="inline-block px-4 text-white/80">
          {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()} | {location}
        </span>
      </div>
    </div>
  );
};

export default LiveTicker;

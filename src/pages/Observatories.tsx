
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Building, MapPin, Mountain, Telescope } from "lucide-react";
import ObservatoriesMap from "../components/ObservatoriesMap";

const Observatories = () => {
  const observatories = [
    {
      name: "Mauna Kea Observatories",
      location: "Hawaii, USA",
      description: "Home to the world's largest optical telescope, situated at 4,205 meters above sea level.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      elevation: "4,205m",
      specialization: "Optical and Infrared Astronomy",
      coordinates: [-155.4681, 19.8968] as [number, number] // explicitly typed as tuple
    },
    {
      name: "Very Large Array (VLA)",
      location: "New Mexico, USA",
      description: "One of the world's premier radio astronomy observatories, consisting of 27 radio antennas.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      elevation: "2,124m",
      specialization: "Radio Astronomy",
      coordinates: [-107.6184, 34.0784] as [number, number]
    },
    {
      name: "European Southern Observatory",
      location: "Atacama Desert, Chile",
      description: "The world's most productive ground-based astronomical facility, located in the driest desert.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      elevation: "2,635m",
      specialization: "Multi-wavelength Astronomy",
      coordinates: [-70.4040, -24.6275] as [number, number]
    },
    {
      name: "Paranal Observatory",
      location: "Cerro Paranal, Chile",
      description: "Home to the Very Large Telescope (VLT), the world's most advanced optical instrument.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      elevation: "2,635m",
      specialization: "Optical and Infrared Astronomy",
      coordinates: [-70.4048, -24.6271] as [number, number]
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Observatory at night"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic/50 to-cosmic"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">World's Leading Observatories</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most advanced astronomical observatories around the globe, where scientists 
              peer into the depths of space to unravel the mysteries of our universe.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Observatory Locations</h2>
        <ObservatoriesMap 
          observatories={observatories.map(obs => ({
            name: obs.name,
            location: obs.location,
            coordinates: obs.coordinates,
            description: obs.description
          }))} 
        />
      </div>

      {/* Observatories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {observatories.map((observatory) => (
            <div
              key={observatory.name}
              className="bg-cosmic-muted rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={observatory.image}
                  alt={observatory.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-muted via-cosmic-muted/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cosmic-gold">
                  {observatory.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{observatory.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Mountain className="w-4 h-4 mr-1" />
                    <span>{observatory.elevation}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">
                  {observatory.description}
                </p>

                <div className="flex items-center text-cosmic-accent">
                  <Telescope className="w-4 h-4 mr-2" />
                  <span>{observatory.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LiveTicker />
    </div>
  );
};

export default Observatories;

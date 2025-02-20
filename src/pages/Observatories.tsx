import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Building, MapPin, Mountain, Telescope } from "lucide-react";

const Observatories = () => {
  const observatories = [
    {
      name: "Mauna Kea Observatories",
      location: "Hawaii, USA",
      description: "Home to the world's largest optical telescope, situated at 4,205 meters above sea level.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      elevation: "4,205m",
      specialization: "Optical and Infrared Astronomy"
    },
    {
      name: "Very Large Array (VLA)",
      location: "New Mexico, USA",
      description: "One of the world's premier radio astronomy observatories, consisting of 27 radio antennas.",
      image: "data:image/jpeg;base64,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",
      elevation: "2,124m",
      specialization: "Radio Astronomy"
    },
    {
      name: "European Southern Observatory",
      location: "Atacama Desert, Chile",
      description: "The world's most productive ground-based astronomical facility, located in the driest desert.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      elevation: "2,635m",
      specialization: "Multi-wavelength Astronomy"
    },
    {
      name: "Paranal Observatory",
      location: "Cerro Paranal, Chile",
      description: "Home to the Very Large Telescope (VLT), the world's most advanced optical instrument.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      elevation: "2,635m",
      specialization: "Optical and Infrared Astronomy"
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

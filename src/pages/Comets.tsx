
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Calendar, Info } from "lucide-react";

const Comets = () => {
  const upcomingComets = [
    {
      name: "Halley's Comet",
      nextAppearance: "July 28, 2061",
      period: "76 years",
      description: "The most famous periodic comet, visible to the naked eye.",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0"
    },
    {
      name: "NEOWISE",
      nextAppearance: "~8786",
      period: "6,800 years",
      description: "One of the brightest comets visible from Earth in 2020.",
      image: "https://images.unsplash.com/photo-1595947425698-525d0a1fbb8d"
    },
    {
      name: "ATLAS",
      nextAppearance: "2024",
      period: "Varies",
      description: "A periodic comet discovered by the ATLAS survey.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Comets</h1>
        <p className="text-xl text-gray-300 mb-12">
          Discover the fascinating world of comets and track their appearances in our solar system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingComets.map((comet) => (
            <div 
              key={comet.name}
              className="bg-cosmic-muted rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={comet.image}
                  alt={comet.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-muted via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cosmic-gold">
                  {comet.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Next: {comet.nextAppearance}</span>
                  </div>
                  <div className="flex items-center">
                    <Info className="w-4 h-4 mr-1" />
                    <span>Period: {comet.period}</span>
                  </div>
                </div>

                <p className="text-gray-300">
                  {comet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Comets;

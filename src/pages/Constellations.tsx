
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Star, Calendar, MapPin } from "lucide-react";

const Constellations = () => {
  const constellations = [
    {
      name: "Ursa Major",
      type: "Northern",
      bestViewing: "Spring",
      mainStars: 7,
      description: "Also known as the Great Bear, contains the Big Dipper asterism.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      name: "Orion",
      type: "Equatorial",
      bestViewing: "Winter",
      mainStars: 7,
      description: "One of the most recognizable constellations, representing a hunter.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
    },
    {
      name: "Scorpius",
      type: "Zodiacal",
      bestViewing: "Summer",
      mainStars: 7,
      description: "Represents a scorpion, contains the bright star Antares.",
      image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Constellations</h1>
        <p className="text-xl text-gray-300 mb-12">
          Explore the ancient patterns in the night sky that have guided humanity for millennia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constellations.map((constellation) => (
            <div 
              key={constellation.name}
              className="bg-cosmic-muted rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={constellation.image}
                  alt={constellation.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-muted via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-cosmic-gold">
                  {constellation.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{constellation.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{constellation.bestViewing}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{constellation.mainStars} main stars</span>
                  </div>
                </div>

                <p className="text-gray-300">
                  {constellation.description}
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

export default Constellations;

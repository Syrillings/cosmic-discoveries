
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Play, Star } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      title: "Journey Through the Solar System",
      thumbnail: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700",
      duration: "15:30",
      views: "125K",
      description: "Explore our cosmic neighborhood in stunning 4K resolution."
    },
    {
      title: "Birth of Stars Explained",
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      duration: "12:45",
      views: "98K",
      description: "Understanding stellar formation and evolution."
    },
    {
      title: "Black Holes: Gateway to Understanding",
      thumbnail: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
      duration: "20:15",
      views: "203K",
      description: "Dive deep into the mysteries of black holes."
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Astronomical Videos</h1>
        <p className="text-xl text-gray-300 mb-12">
          Explore the cosmos through our curated collection of educational videos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.title} className="bg-cosmic-muted rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-300 mb-3">{video.description}</p>
                <div className="flex items-center text-gray-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{video.views} views</span>
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

export default Videos;

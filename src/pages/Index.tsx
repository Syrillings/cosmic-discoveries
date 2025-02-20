
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Starry Night Sky"
            className="w-full h-full object-cover opacity-30"
          />
          <div ></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Embark on a journey through space and time, discovering the wonders of our universe.
          </p>
          <a
            href="#categories"
            className="inline-block bg-cosmic-accent text-white px-8 py-3 rounded-full font-medium hover:bg-cosmic-accent/90 transition-colors"
          >
            Begin Discovery
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosmic Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Big Bang Theory",
                description: "Explore the origins of our universe",
                image: "/src/assets/Space.jpg"
              },
              {
                title: "Evolution of Earth",
                description: "Journey through Earth's history",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
              },
              {
                title: "Latest Discoveries",
                description: "Recent breakthroughs in astronomy",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
              }
            ].map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
                <div className="absolute inset-0">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic via-cosmic/80 to-transparent"></div>
                </div>
                <div className="relative p-6 h-full min-h-[300px] flex flex-col justify-end">
                  <Link to ="/categories"><h3 className="text-xl font-semibold mb-2">{category.title}</h3></Link>
                  <Link to = "/categories"><p className="text-gray-300">{category.description}</p></Link>
                  <Star className="absolute top-4 right-4 w-6 h-6 text-cosmic-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planets Section */}
      <section id="planets" className="py-20 bg-cosmic-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Solar System
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-accent/20 via-transparent to-transparent"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mercury",
                  image: "/src/assets/Mercury.jpg"
                },
                {
                  name: "Venus",
                  image: "/src/assets/Venus.jpg"
                },
                {
                  name: "Earth",
                  image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4"
                },
                {
                  name: "Mars",
                 image: "/src/assets/mars.jpg"
                },
                {
                  name: "Jupiter",
                  image: "/src/assets/Jupiter2.webp"
                },
                {
                  name: "Saturn",
                  image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5"
                },
                {
                  name: "Uranus",
                  image: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3"
                },
                {
                  name: "Neptune",
                  image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6"
                },
                {
                  name: "Pluto",
                  image: "/src/assets/Pluto.jpg"
                }
              ].map((planet) => (
                <div 
                  key={planet.name}
                  className="group relative overflow-hidden rounded-full aspect-square bg-cosmic-muted border border-white/10 hover:border-cosmic-accent transition-all hover:scale-105"
                >
                  <img 
                    src={planet.image}
                    alt={planet.name}
                    className={`object-cover transition-transform group-hover:scale-110 cursor-pointer ${
                      planet.name === "Venus" ? "w-[1/2] h-full object-cover" : "w-[3/4] h-full object-cover"
                    }`}
                   
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-lg font-medium bg-cosmic/80 px-4 py-2 rounded-full">
                      {planet.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-cosmic-muted/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Cosmic Discoveries. All rights reserved.
          </p>
        </div>
      </footer>

      <LiveTicker />
    </div>
  );
};

export default Index;

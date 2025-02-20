
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { Calendar, Globe, Telescope, Rocket } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "Exoplanet Discovery - 2025",
      content: "In a groundbreaking discovery by astronomers using the James Webb Space Telescope, a new exoplanet has been detected in the habitable zone of a star in the Alpha Centauri system. This planet, dubbed Proxima b2, is in the optimal range for liquid water and could potentially support life. The discovery marks a significant step in our search for extraterrestrial life beyond our solar system.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700"
    },
    {
      title: "Breakthrough in Star Formation Understanding",
      content: "Recent advancements in computer modeling and observational techniques have allowed scientists to gain a deeper understanding of the process of star formation. A team of astronomers has developed a new model that suggests stars may form faster and in larger clusters than previously thought. These findings could provide critical insights into the evolution of galaxies and the early universe.",
      icon: Telescope,
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    },
    {
      title: "New Observations of Supernova Remnants",
      content: "New observations of the supernova remnant known as Cassiopeia A have revealed unexpected complexities in the structure of the expanding shockwave. These observations suggest that the supernova explosion may have been more asymmetric than previously believed, which could influence our understanding of the nature of the progenitor star and the mechanics of stellar explosions.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
    },
    {
      title: "Advancements in Solar System Exploration",
      content: "The latest missions to the outer solar system, including the NASA-led Europa Clipper mission, are providing unprecedented data on Jupiter's moon Europa. Scientists have recently uncovered evidence that Europa's icy surface hides a deep, subsurface ocean, which may be one of the best places to search for microbial life beyond Earth.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Latest Developments in Astronomy</h1>
        <div className="grid grid-cols-1 gap-12">
          {newsArticles.map((article, index) => (
            <article 
              key={article.title}
              className="bg-cosmic-muted rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cosmic-muted/80 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <article.icon className="w-6 h-6 text-cosmic-gold" />
                    <h2 className="text-2xl md:text-3xl font-bold text-cosmic-gold">
                      {article.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {article.content}
                  </p>
                  <button className="mt-6 bg-cosmic-accent hover:bg-cosmic-accent/90 text-white px-6 py-2 rounded-full transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <LiveTicker />
    </div>
  );
};

export default News;

import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Big Bang Theory",
      description: "Explore the origins of our universe",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      link: "/categories/big-bang"
    },
    {
      title: "Evolution of Earth",
      description: "Journey through Earth's history",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/categories/earth"
    },
    {
      title: "Latest Discoveries",
      description: "Recent breakthroughs in astronomy",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      link: "/categories/discoveries"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
            alt="Space background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic/50 to-cosmic"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Astronomical Categories</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the vast cosmos through our carefully curated categories. From nearby planets to distant galaxies, 
              discover the wonders that space has to offer.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative bg-cosmic-muted rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-muted via-cosmic-muted/50 to-transparent"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cosmic-gold transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-cosmic-accent group-hover:text-cosmic-gold transition-colors">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <LiveTicker />
    </div>
  );
};

export default Categories;

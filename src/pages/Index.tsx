
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-muted via-cosmic to-cosmic"></div>
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

      {/* Categories Section Placeholder */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosmic Categories
          </h2>
          {/* Content will be added in subsequent updates */}
        </div>
      </section>

      {/* Planets Section Placeholder */}
      <section id="planets" className="py-20 bg-cosmic-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Solar System
          </h2>
          {/* Content will be added in subsequent updates */}
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

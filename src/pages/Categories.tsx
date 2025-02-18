
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Categories = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground pt-16">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Categories</h1>
        <p>Coming soon: Detailed categories content</p>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Categories;


import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Observatories = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground pt-16">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Observatories</h1>
        <p>Coming soon: Detailed observatories content</p>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Observatories;

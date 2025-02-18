
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Videos = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground ">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Videos</h1>
        <p>Coming soon: Detailed Videos content</p>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Videos;
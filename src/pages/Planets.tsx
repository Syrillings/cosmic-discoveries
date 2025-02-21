
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import PlanetCard from "@/components/cards/PlanetCard";
import { planets } from "@/data/planets";

const Planets = () => {
  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Planets</h1>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold">The 9 Planets in Our Solar System</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planet={planet}
              className={planet.class.main}
              imgClassName={planet.class.imgClass}
              altColor={planet.class.altColor}
            />
          ))}
        </div>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Planets;

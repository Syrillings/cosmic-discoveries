import Navigation from "../components/Navigation";
import SideNavigation from "@/components/planets/Navigation";
import PlanetCard from "@/components/cards/PlanetCard";
import { planets } from "@/data/planets";
import { useParams } from "react-router-dom";

const PlanetDetail = () => {
  const { planetName } = useParams();
  const planet = planets.find((planet) => planet.name === planetName);

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 px-4 sm:px-6 lg:px-12 py-20 relative">
        <SideNavigation page={planet?.page}/>
        <div className="lg:col-span-3">
          <section id="discovery">
            <h1 className="text-4xl font-bold capitalize">{planetName}</h1>
            <p className="text-xl mt-5">{planet.general?.firstSection}</p>
            <div className="mt-10 flex justify-center">
              <div className="lg:max-w-[700px]">
                <img
                  src={`/src/assets/images/planets/${planet.name}/${planet.general?.image}`}
                  alt={`${planet.name} image`}
                  className="object-cover lg:max-h-[600px]"
                />
              </div>
            </div>
            <p className="text-xl mt-5">{planet.general?.secondSection}</p>
          </section>
          <section className="mt-14" id="formation">
            <h2 className="text-3xl font-bold capitalize">Formation</h2>
            <p className="text-xl mt-5">{planet.formation}</p>
          </section>
          <section className="mt-14" id="distance">
            <h2 className="text-3xl font-bold capitalize">
              Distance, Size and Mass
            </h2>
            <p className="text-xl mt-5">{planet?.distance?.description}</p>
            <div className="mt-10 flex justify-center">
              <div className="">
                <img
                  src={`/src/assets/images/planets/${planet.name}/${planet?.distance?.image}`}
                  alt={`${planet.name} size comparison`}
                  className="object-cover lg:max-h-[600px]"
                />
              </div>
            </div>
          </section>
          <section className="mt-14" id="geology">
            <h2 className="text-3xl font-bold capitalize">
              Surface and Geology
            </h2>
            <p className="text-xl mt-5">{planet?.surface?.firstSection}</p>
            <div className="mt-10 flex justify-center">
              <div className="">
                <img
                  src={`/src/assets/images/planets/${planet.name}/${planet?.surface?.image1}`}
                  alt={`${planet.name} surface`}
                  className="object-cover lg:max-h-[600px]"
                />
              </div>
            </div>
            <p className="text-xl mt-5">{planet?.surface?.secondSection}</p>
            {planet?.surface?.image2 && (
              <div className="mt-10 flex justify-center">
                <div className="">
                  <img
                    src={`/src/assets/images/planets/${planet.name}/${planet?.surface?.image2}`}
                    alt={`${planet.name} surface`}
                    className="object-cover lg:max-h-[600px]"
                  />
                </div>
              </div>
            )}
          </section>
          <section className="mt-14" id="atmosphere">
            <h2 className="text-3xl font-bold capitalize">Atmosphere </h2>
            <p className="text-xl mt-5">{planet?.atmosphere?.firstSection}</p>
            <div className="mt-10 flex justify-center">
              <div className="">
                <img
                  src={`/src/assets/images/planets/${planet.name}/${planet?.atmosphere?.image}`}
                  alt={`${planet.name} atmosphere`}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xl mt-5">{planet?.atmosphere?.secondSection}</p>
          </section>
          <section className="mt-14" id="satellite">
            <h2 className="text-3xl font-bold capitalize">Satellites </h2>
            <p className="text-xl mt-5">{planet?.satellite}</p>
          </section>
          <section className="mt-14" id="facts">
            <h2 className="text-3xl font-bold capitalize">Did you know?</h2>
            <ul className="text-xl mt-5 flex flex-col gap-5 list-disc list-outside pl-5">
              {planet?.facts.map((fact) => (
                <li className="">{fact}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;

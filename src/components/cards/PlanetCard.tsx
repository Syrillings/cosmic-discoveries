import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const PlanetCard = ({planet, className, imgClassName, altColor}) => {
  const planetFacts = planet.fact.length > 20 ? planet.fact.slice(0, 100) + "..." : planet.fact;
  return (
    <Link to={`/planets/${planet.name}`}>
      <div className={cn("rounded-2xl p-5 bg-[#506AB2] grid lg:grid-cols-4 relative hover:scale-105  transition-all duration-500 ease-in-out cursor-pointer" 
      ,className
    )}>
        <div className={cn("lg:absolute -top-5 left-0 lg:-translate-x-[25%] col-span-1 max-lg:flex max-lg:items-center max-lg:justify-center"
          ,imgClassName
        )}>
          <div className="lg:size-40">
            <img
              src={`/src/assets/images/planets/${planet.image}`}
              alt="Mercury"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-3 lg:col-start-2 max-lg:mt-4">
          <h3 className="text-3xl font-bold tracking-wide capitalize">{planet.name}</h3>
          <p className="text-[13px]">
            {planet.fact}
          </p>
          <button className={cn("bg-[#313F90] p-2 font-medium rounded-lg mt-5 w-full flex items-center justify-center"
             ,altColor
            )}>
            <span className="capitalize mr-1">{planet.name}</span> facts
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PlanetCard;

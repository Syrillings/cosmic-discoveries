import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const Navigation = ({page}) => {
    const {prev, next} = page
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        let closestSection = null;
        let minDistance = Number.POSITIVE_INFINITY;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
              minDistance = distance;
              closestSection = entry.target.id;
            }
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        }
      },
      { rootMargin: "-160px 0px 80px 0px", threshold: 0.1 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <aside className="relative">
      <div className="max-lg:hidden sticky left-0 top-[80px]">
        <ul className="p-5 pr-10 flex flex-col gap-2">
          <a
            href="#discovery"
            onClick={(e) => handleAnchorClick(e, "discovery")}
          >
            <li
              className={`p-4 border-l-2 cursor-pointer transition-all duration-300  ${
                activeSection === "discovery"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Discovery
            </li>
          </a>
          <a
            href="#formation"
            onClick={(e) => handleAnchorClick(e, "formation")}
          >
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "formation"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Formation
            </li>
          </a>
          <a href="#distance" onClick={(e) => handleAnchorClick(e, "distance")}>
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "distance"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Distance & Size
            </li>
          </a>
          <a href="#formation" onClick={(e) => handleAnchorClick(e, "geology")}>
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "geology"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Surface & Geology
            </li>
          </a>
          <a
            href="#atmosphere"
            onClick={(e) => handleAnchorClick(e, "atmosphere")}
          >
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "atmosphere"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Atmosphere
            </li>
          </a>
          <a
            href="#satellite"
            onClick={(e) => handleAnchorClick(e, "satellite")}
          >
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "satellite"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Satellite
            </li>
          </a>
          <a href="#facts" onClick={(e) => handleAnchorClick(e, "facts")}>
            <li
              className={`p-4 border-l cursor-pointer transition-all duration-300 ${
                activeSection === "facts"
                  ? "bg-yellow-500 text-black border-l-2 border-l-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Facts
            </li>
          </a>
          <div className="grid grid-cols-2">
          <Link to={`/planets/${prev}`} >
            <li
              className="p-4 cursor-pointer transition-all duration-300 bg-white/10 hover:bg-white/20 text-white flex items-center gap-2"
            >
              <ArrowLeftIcon className="ml-2 size-5" />
              Prev
            </li>
          </Link>
          <Link to={`/planets/${next}`} >
            <li
              className="p-4 border-l cursor-pointer transition-all duration-300 bg-gray-200 hover:bg-gray-300 text-black  border-l-white flex items-center gap-2"
            >
              Next
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </li>
          </Link>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;

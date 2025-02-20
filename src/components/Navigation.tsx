import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 1000) + 100);
  }, []);


  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    { name: "Planets", to: "/planets" },
    { name: "Comets", to: "/comets" },
    { name: "Constellations", to: "/constellations" },
    { name: "Observatories", to: "/observatories" },
    { name: "Resources", to: "/Books" },
    { name: "News", to: "/news" },
    { name: "News", to: "/news" },
    { name: "Contact", to: "/contact" },

  ];

  return (
    <nav className="fixed w-full z-50 bg-cosmic/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Cosmic Discoveries
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.to ? "text-yellow-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-white bg-cosmic-accent/20 px-6 py-1 rounded-full">
              <span className="text-sm">Visitors: {visitorCount}</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cosmic-muted">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.to ? "text-yellow-400" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulated visitor count for demo
    setVisitorCount(Math.floor(Math.random() * 1000) + 100);
  }, []);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    { name: "Planets", to: "/planets" },
    { name: "Constellations", to: "/constellations" },
    { name: "Observatories", to: "/observatories" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-cosmic/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-cosmic-gold transition-colors">
              Cosmic Discoveries
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-white bg-cosmic-accent/20 px-4 py-1 rounded-full">
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cosmic-muted">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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

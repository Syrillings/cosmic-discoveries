
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Planets from "./pages/Planets";
import Comets from "./pages/Comets";
import Resources from "./pages/Books";
//import Videos from "./pages/Videos";
import Constellations from "./pages/Constellations";
import Observatories from "./pages/Observatories";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import PlanetDetail from "./pages/PlanetDetail";
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:planetName" element={<PlanetDetail />} />
      <Route path="/constellations" element={<Constellations />} />
      <Route path="/observatories" element={<Observatories />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/comets" element={<Comets />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

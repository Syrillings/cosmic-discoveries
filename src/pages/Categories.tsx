import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Categories = () => {
  const categories = [
    {
      title: "Big Bang Theory",
      description: `The Big Bang Theory is the leading explanation for the origin and evolution of our universe. It posits that approximately 13.8 billion years ago, the universe began from an extremely hot and dense singularity—a point where all matter and energy were concentrated. This singularity rapidly expanded in an event known as the Big Bang, giving rise to space, time, and matter. As the universe expanded, it cooled, allowing subatomic particles to form atoms. Hydrogen and helium were the primary elements created, eventually coalescing into stars and galaxies under the influence of gravity. The theory is supported by multiple lines of evidence, including the detection of cosmic microwave background radiation, which is the afterglow of the initial explosion, and the observation that galaxies are moving away from each other, indicating the ongoing expansion of the universe. The Big Bang Theory revolutionized our understanding of the cosmos, providing a framework for understanding the large-scale structure and evolution of the universe over billions of years.`,
      image: "/bigbang.jpg",
    },
    {
      title: "Evolution of Earth",
      description: `Earth's evolution is a complex narrative spanning approximately 4.5 billion years. It began as a molten sphere, gradually cooling to develop a solid crust and primitive oceans through volcanic activity and the condensation of atmospheric water vapor. The early Earth experienced constant bombardment by asteroids and comets, contributing to the formation of its oceans and atmosphere. Around 3.5 billion years ago, the first simple life forms—prokaryotic microorganisms—emerged in the oceans. Over billions of years, biological and geological processes intertwined to shape Earth's surface and atmosphere. Photosynthetic organisms began producing oxygen, leading to the Great Oxidation Event around 2.5 billion years ago, which transformed the atmosphere and allowed more complex life to evolve. The Cambrian Explosion, approximately 541 million years ago, marked the rapid diversification of multicellular life. Plate tectonics continuously reshaped Earth's continents, causing the formation and breakup of supercontinents like Pangaea. Mass extinctions, such as the one that ended the reign of the dinosaurs 66 million years ago, paved the way for mammals and, eventually, humans. Earth's evolution is a story of resilience, adaptation, and constant change, driven by both internal and external forces.`,
      image: "/nature.jpg",
    },
    {
      title: "Latest Discoveries",
      description: `The field of astronomy is advancing at an unprecedented pace, with recent discoveries reshaping our understanding of the universe. One of the most groundbreaking achievements was the detection of gravitational waves in 2015, confirming a century-old prediction made by Albert Einstein in his General Theory of Relativity. These ripples in spacetime, produced by cataclysmic cosmic events like merging black holes, have opened a new window into observing the universe. In 2019, the Event Horizon Telescope captured the first-ever image of a black hole in the M87 galaxy, providing direct visual evidence of these mysterious objects. Additionally, the discovery of thousands of exoplanets—planets orbiting stars beyond our solar system—has revolutionized our search for habitable worlds. Some of these planets reside in the habitable zone, where conditions could support liquid water and potentially life. Space telescopes like Hubble and James Webb continue to unveil breathtaking images and data, revealing distant galaxies, nebulae, and the earliest light from the universe's infancy. These discoveries not only expand our cosmic perspective but also inspire new questions about the nature of dark matter, dark energy, and the possibility of extraterrestrial life.`,
      image: "/Space.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />

      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
            alt="Space background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic/50 to-cosmic"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Astronomical Categories
            </motion.h1>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Explore the vast cosmos through our carefully curated articles.
              From nearby planets to distant galaxies, discover the wonders that
              space has to offer.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {categories.map((category) => (
            <motion.article
              key={category.title}
              variants={itemVariants}
              className="bg-cosmic rounded-lg overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="md:col-span-1 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
              </div>
              <div className="md:col-span-2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <LiveTicker />
    </div>
  );
};

export default Categories;
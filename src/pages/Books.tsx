import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";

const Books = () => {
  const books = [
    {
      title: "The Planets",
      author: "Dava Sobel",
      description: "A fascinating journey through our solar system, blending science, mythology, and history.",
      link: "https://www.goodreads.com/book/show/149322.The_Planets",
      image: "/src/assets/planets-book.jpg",
    },
    {
      title: "Solar System: A Visual Exploration",
      author: "Marcus Chown",
      description: "A beautifully illustrated guide to the wonders of the solar system.",
      link: "https://www.goodreads.com/book/show/23288788-solar-system",
      image: "/src/assets/solar-system-book.jpg",
    },
    {
      title: "The Grand Tour: The Solar System Beyond",
      author: "Ron Miller & William K. Hartmann",
      description: "An in-depth visual tour of our solar system with stunning illustrations and expert commentary.",
      link: "https://www.goodreads.com/book/show/608130.The_Grand_Tour",
      image: "/src/assets/grand-tour-book.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic text-cosmic-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Explore Solar System Books</h1>
        <p className="mb-12 text-lg text-gray-300">
          Dive into these incredible books to learn more about our solar system and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-cosmic-dark rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-400 mb-4">by {book.author}</p>
                <p className="text-gray-300 mb-4">{book.description}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Books;

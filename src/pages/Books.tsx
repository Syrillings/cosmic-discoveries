import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
  
import { Star } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "The Planets",
      author: "Andrew Cohen",
      description: "A fascinating journey through our solar system, blending science, mythology, and history.",
      link: "https://www.goodreads.com/book/show/149322.The_Planets",
      image: "/src/assets/theplanets.jfif",
    },
    {
      title: "Solar System",
      author: "Marcus Chown",
      description: "A beautifully illustrated guide to the wonders of the solar system.",
      link: "https://www.goodreads.com/book/show/23288788-solar-system",
      image: "/src/assets/solarsystem.jfif",
    },
    {
      title: "The Grand Tour",
      author: "Ron Miller & William K. Hartmann",
      description: "An in-depth visual tour of our solar system with stunning illustrations and expert commentary.",
      link: "https://www.goodreads.com/book/show/608130.The_Grand_Tour",
      image: "/src/assets/grandtour.jfif",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      description: "A landmark book that explores the universe and our place within it.",
      link: "https://www.goodreads.com/book/show/55030.Cosmos",
      image: "/src/assets/cosmos.jfif",
    },
    {
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      description: "A quick and engaging read on the basics of astrophysics.",
      link: "https://www.goodreads.com/book/show/32191710-astrophysics-for-people-in-a-hurry",
      image: "/src/assets/astrophysics.jfif",
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description: "An iconic book on the nature of the universe, black holes, and the theory of everything.",
      link: "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time",
      image: "/src/assets/briefhistory.jfif",
    },
    {
      title: "The Elegant Universe",
      author: "Brian Greene",
      description: "An exploration of string theory and the quest for a unified theory of physics.",
      link: "https://www.goodreads.com/book/show/804927.The_Elegant_Universe",
      image: "/src/assets/elegantuniverse.jfif",
    },
    {
      title: "Black Holes and Time Warps: Einstein's Outrageous Legacy",
      author: "Kip S. Thorne",
      description: "A fascinating dive into black holes, wormholes, and the implications of general relativity.",
      link: "https://www.goodreads.com/book/show/100173.Black_Holes_and_Time_Warps",
      image: "/src/assets/blackholes.jfif",
    },
    {
      title: "The Fabric of the Cosmos",
      author: "Brian Greene",
      description: "An exploration of space, time, and the nature of the universe.",
      link: "https://www.goodreads.com/book/show/22423.The_Fabric_of_the_Cosmos",
      image: "/src/assets/fabricofcosmos.jfif",
    },
  ];
  
  const videos = [
    {
      title: "Journey Through the Solar System",
      videoId: "libKVRa01L8",
      views: "2.3M",
      description: "A stunning tour of our solar system in 4K.",
    },
    {
      title: "How the Universe Is Way Bigger Than You Think",
      videoId: "Iy7NzjCmUf0",
      views: "10M",
      description: "Mind-blowing scale of the universe explained.",
    },
    {
      title: "The Birth and Death of Stars",
      videoId: "PM9CQDlQI0A",
      views: "1.5M",
      description: "How stars are born and what happens when they die.",
    },
    {
      title: "What If You Fell Into a Black Hole?",
      videoId: "QqsLTNkzvaY",
      views: "15M",
      description: "A visual journey into the heart of a black hole.",
    },
    {
      title: "A Journey to the End of the Universe",
      videoId: "b_TkFhj9mgk",
      views: "11M",
      description: "Visualizing the farthest reaches of the universe.",
    },
    {
      title: "The Largest Star in the Universe – Size Comparison",
      videoId: "i93Z7zljQ7I",
      views: "18M",
      description: "How big can stars really get? A mind-bending comparison.",
    },
    {
      title: "The Most Mysterious Star in the Universe",
      videoId: "gypAjPp6eps",
      views: "7.8M",
      description: "Exploring the mystery of Tabby's Star and alien megastructures.",
    },
    {
      title: "The Observable Universe Explained",
      videoId: "tVJRS4oZ5ak",
      views: "9M",
      description: "Understanding the limits of what we can see in the cosmos.",
    },
    {
      title: "How Big is the Universe?",
      videoId: "pSHVbLPWA28",
      views: "5.5M",
      description: "A guide to distances in our galaxy and beyond.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Astronomical Videos</h1>
        <p className="text-xl text-gray-300 mb-12">
          Explore the cosmos through our curated collection of educational videos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-cosmic-muted rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-300 mb-3">{video.description}</p>
                <div className="flex items-center text-gray-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{video.views} views</span>
                </div>
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

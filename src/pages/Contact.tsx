import Navigation from "../components/Navigation";
import LiveTicker from "../components/LiveTicker";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import MapEmbed from "../components/MapEmbed";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cosmic  text-cosmic-foreground ">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20">
        <div className="lg:mt-10 grid gap-4 lg:grid-cols-2">
          <div>
            <img
              src="/src/assets/images/celestials_1.jpg"
              alt="celestials"
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-8  bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent">
              Our Purpose
            </h1>
            <p>
              Cosmic Discoveries is a website dedicated to exploring the wonders
              of the universe, from the vast expanse of space to the intricate
              details of celestial bodies. Our mission is to ignite curiosity
              and expand knowledge about planets, comets, stars, constellations,
              and the many mysteries that lie beyond our world. Whether you're a
              space enthusiast, a student, or just someone fascinated by the
              cosmos, we provide in-depth articles, stunning visuals, and the
              latest astronomical discoveries to keep you informed and inspired.
              <br /> Through engaging content and scientific insights, we aim to
              make space exploration accessible to everyone. From the history of
              planetary discoveries to the latest advancements in space
              technology, Cosmic Discoveries serves as a gateway to
              understanding our place in the universe. We believe that by
              learning more about the cosmos, we gain a deeper appreciation for
              the beauty and complexity of existence itself. Join us on this
              journey through the stars as we uncover the secrets of the
              universe, one discovery at a time.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-5xl font-semibold tracking-wide text-center bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="mt-10 grid lg:grid-cols-3 lg:px-24 gap-7 ">
            <div>
              <div>
                <img
                  src="/src/assets/images/founders/founder_1.jpg"
                  alt="celestials"
                  className="object-cover rounded-2xl h-[300px] w-full"
                />
              </div>
              <p className="font-semibold text-lg mt-3">John doe</p>
              <p>Founder</p>
            </div>
            <div>
              <div>
                <img
                  src="/src/assets/images/founders/founder_2.jpg"
                  alt="celestials"
                  className="object-cover rounded-2xl h-[300px] w-full"
                />
              </div>
              <p className="font-semibold text-lg mt-3">James Bond</p>
              <p>Co Founder</p>
            </div>
            <div>
              <div>
                <img
                  src="/src/assets/images/founders/founder_3.jpg"
                  alt="celestials"
                  className="object-cover rounded-2xl h-[300px] w-full"
                />
              </div>
              <p className="font-semibold text-lg mt-3">Jack Ryan</p>
              <p>Co Founder</p>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-5xl font-semibold tracking-wide text-center bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden h-[500px] max-lg:order-2">
            <MapEmbed place={`Aptech 164, Ikot Ekpene Road, Uyo`} />
            </div>
            <div className="h-max lg:col-span-1 border rounded-2xl w-full p-5 flex flex-col gap-5 max-lg:order-1">
              <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                <MapPinIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-xl  text-blue-500">Location</p>
                  <p>164, Ikot Ekpene Road, Uyo</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                <MailIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-xl  text-blue-500">Email</p>
                  <p>cosmicdiscoveries@gmail.com</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                <PhoneIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-xl  text-blue-500">Phone</p>
                  <p>+2348123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveTicker />
    </div>
  );
};

export default Contact;

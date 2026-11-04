import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "MOUNTAIN ESCAPE",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
    rating: "4.9",
    duration: "5-7 Days",
    size: "large",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    category: "TROPICAL PARADISE",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    rating: "4.8",
    duration: "4-6 Days",
    size: "small",
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    category: "COASTAL GETAWAY",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200",
    rating: "4.9",
    duration: "3-5 Days",
    size: "small",
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    category: "CULTURAL JOURNEY",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200",
    rating: "4.9",
    duration: "4-5 Days",
    size: "large",
  },
];

function DestinationShowcase() {
  return (
    <section
      id="destinations"
      className="bg-[#F7F5EF] px-5 py-24  max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#238A83]">
            CURATED DESTINATIONS
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold leading-tight text-[#172B3A] md:text-6xl lg:text-7xl">
            Places that take your breath{" "}
            <span className="font-serif italic text-[#238A83]">away.</span>
          </h2>
        </div>

        <a
          href="/explore"
          className="flex items-center gap-3 text-lg font-semibold text-[#172B3A] transition-colors hover:text-[#238A83]"
        >
          View all destinations
          <ArrowUpRight size={22} />
        </a>
      </div>

      {/* Destination Cards */}
      <div className="mx-auto grid  grid-cols-1 gap-6 px-6 lg:grid-cols-12">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.name}
            destination={destination}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-[2rem] border border-[#172B3A]/10 bg-white/60 p-8 backdrop-blur-xl md:p-12"
      >
        <h3 className="text-4xl font-semibold text-[#172B3A] md:text-5xl">
          Your next story starts somewhere.
        </h3>

        <p className="mt-4 text-lg text-[#172B3A]/65">
          Discover places that make every journey unforgettable.
        </p>
      </motion.div>
    </section>
  );
}

export default DestinationShowcase;

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, ArrowDown, MapPin } from "lucide-react";
import destinations from "../data/destinations";
import ExploreCard from "../components/explore/ExploreCard";

const categories = [
  "All Places",
  "Mountains",
  "Beaches",
  "Adventure",
  "Culture",
  "Nature",
];

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Places");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All Places" ||
        destination.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main className="min-h-screen bg-[#F7F5EF] px-5 pb-24 pt-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Hero Heading */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#238A83]" />
            <p className="text-sm font-semibold tracking-[0.25em] text-[#238A83]">
              YOUR NEXT ADVENTURE STARTS HERE
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight text-[#172B3A] md:text-7xl">
            Find places that
            <br />
            <span className="font-serif italic text-[#238A83]">
              move your soul.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#172B3A]/65 md:text-xl">
            From peaceful beaches to breathtaking mountains, discover
            destinations worth travelling for.
          </p>
        </motion.section>

        {/* Search Panel */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/65 p-5 shadow-[0_20px_60px_rgba(23,43,58,0.07)] backdrop-blur-xl md:flex-row md:items-center md:p-6"
        >
          <div className="flex flex-1 items-center gap-4 rounded-2xl bg-[#F7F5EF] px-5 py-4">
            <Search className="shrink-0 text-[#238A83]" size={22} />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destinations or countries..."
              className="w-full bg-transparent text-base text-[#172B3A] outline-none placeholder:text-[#172B3A]/40"
            />
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-[#172B3A] px-7 py-4 font-semibold text-white">
            <SlidersHorizontal size={19} />
            <span>Explore Places</span>
          </div>
        </motion.section>

        {/* Destination Heading */}
        <section id="destination-results">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
                EXPLORE YOUR WAY
              </p>

              <h2 className="text-3xl font-semibold text-[#172B3A] md:text-5xl">
                Discover destinations
              </h2>

              <p className="mt-3 text-base text-[#172B3A]/55">
                Find your perfect escape from our curated collection.
              </p>
            </div>

            <p className="text-base font-medium text-[#172B3A]/60">
              {filteredDestinations.length} destinations found
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-3 text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#172B3A] bg-[#172B3A] text-white shadow-lg"
                    : "border-[#172B3A]/15 bg-white/60 text-[#172B3A]/70 hover:border-[#238A83] hover:text-[#238A83]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destination Cards */}
          {filteredDestinations.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((destination, index) => (
                <ExploreCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#172B3A]/10 bg-white/60 px-5 py-20 text-center">
              <MapPin size={42} className="mx-auto mb-5 text-[#238A83]" />

              <h3 className="text-2xl font-semibold text-[#172B3A]">
                No destinations found
              </h3>

              <p className="mt-3 text-base text-[#172B3A]/60">
                Try another destination or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Places");
                }}
                className="mt-6 rounded-full bg-[#172B3A] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#238A83]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Explore;

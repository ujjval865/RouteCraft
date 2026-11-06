import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import trips from "../data/trips";

import {
  ArrowRight,
  Compass,
  MapPin,
  Plane,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

import TripCard from "../components/my-trips/TripCard";

// Temporary sample data.
// Later, this data will come from Supabase.



function MyTrips() {
  const [activeFilter, setActiveFilter] = useState("All Trips");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All Trips", "Upcoming", "Completed"];

  // Filter trips according to selected category and search.
  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesFilter =
        activeFilter === "All Trips" ||
        trip.status === activeFilter;

      const matchesSearch =
        trip.destination
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        trip.country
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5EF] px-5 pb-24 pt-32 text-[#172B3A] sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#238A83]/20 bg-white/60 px-4 py-2 text-sm font-semibold text-[#238A83] backdrop-blur-lg">
              <Compass size={17} />
              Your Travel Dashboard
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Every journey has a
              <span className="text-[#238A83]"> story.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#172B3A]/65">
              Keep all your travel plans together and get ready
              for the adventures waiting ahead.
            </p>
          </div>

          <Link
            to="/plan-trip"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#172B3A] px-7 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#238A83]"
          >
            <Plus size={21} />
            Plan New Trip
            <ArrowRight size={20} />
          </Link>
        </motion.section>

        {/* Dashboard Stats */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {[
            {
              label: "Total Trips",
              value: trips.length,
              icon: MapPin,
            },
            {
              label: "Upcoming Trips",
              value: trips.filter(
                (trip) => trip.status === "Upcoming"
              ).length,
              icon: Plane,
            },
            {
              label: "Completed Trips",
              value: trips.filter(
                (trip) => trip.status === "Completed"
              ).length,
              icon: Sparkles,
            },
          ].map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-white/80 bg-white/55 p-6 shadow-[0_12px_40px_rgba(23,43,58,0.05)] backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-lg text-[#172B3A]/65">
                    {stat.label}
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8E3D9]/35 text-[#238A83]">
                    <Icon size={23} />
                  </div>
                </div>

                <h2 className="text-4xl font-bold">
                  {stat.value}
                </h2>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Search and Filters */}
        <section className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#172B3A] text-white shadow-lg"
                    : "border border-[#172B3A]/10 bg-white/60 text-[#172B3A]/70 hover:border-[#238A83] hover:text-[#238A83]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/65 px-5 py-3 shadow-sm backdrop-blur-xl md:w-80">
            <Search size={21} className="text-[#238A83]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full bg-transparent text-base outline-none placeholder:text-[#172B3A]/40"
            />
          </div>
        </section>

        {/* Trip Cards */}
        {filteredTrips.length > 0 ? (
          <motion.section
            layout
            className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredTrips.map((trip, index) => (
              <TripCard
                key={trip.id}
                trip={trip}
                index={index}
              />
            ))}
          </motion.section>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-white/80 bg-white/55 px-6 py-20 text-center shadow-lg backdrop-blur-xl"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#A8E3D9]/40 text-[#238A83]">
              <Compass size={38} />
            </div>

            <h2 className="text-3xl font-bold">
              No trips found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-lg text-[#172B3A]/60">
              Try another search or explore a new destination
              for your next adventure.
            </p>

            <Link
              to="/explore"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#172B3A] px-7 py-4 font-semibold text-white transition hover:bg-[#238A83]"
            >
              Explore Destinations
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        )}

      </div>
    </main>
  );
}

export default MyTrips;

import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

import destinations from "../data/destinations";
import WeatherCard from "../components/destination/WeatherCard";
import CountryInfo from "../components/destination/CountryInfo";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === Number(id));

  if (!destination) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F5EF] px-5 pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#172B3A]">
            Destination Not Found
          </h1>

          <p className="mt-4 text-lg text-[#172B3A]/60">
            Sorry, we couldn't find this destination.
          </p>

          <Link
            to="/explore"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#172B3A] px-6 py-3 font-semibold text-white transition hover:bg-[#238A83]"
          >
            <ArrowLeft size={18} />
            Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF] px-5 pb-24 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Back Navigation */}
        <Link
          to="/explore"
          className="mb-8 inline-flex items-center gap-2 text-base font-semibold text-[#172B3A]/70 transition hover:text-[#238A83]"
        >
          <ArrowLeft size={19} />
          Back to Explore
        </Link>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-xl md:h-[600px]"
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/90 via-[#10242D]/20 to-transparent" />

          <div className="absolute left-6 top-6 flex flex-wrap gap-3 md:left-10 md:top-10">
            <span className="rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl">
              {destination.category}
            </span>

            <span className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm text-white backdrop-blur-xl">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              {destination.rating}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <p className="mb-4 flex items-center gap-2 text-lg text-white/80">
              <MapPin size={20} />
              {destination.country}
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-8xl">
              {destination.name}
            </h1>

            <p className="mt-5 flex items-center gap-2 text-base text-white/75 md:text-lg">
              <Clock size={19} />
              {destination.duration}
            </p>
          </div>
        </motion.section>

        {/* Destination Overview */}
        <section className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
              DISCOVER THE DESTINATION
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#172B3A] md:text-5xl">
              Every journey has a story worth experiencing.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#172B3A]/65">
              {destination.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/60 p-8 shadow-lg backdrop-blur-xl lg:col-span-5">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#238A83]">
              TRIP OVERVIEW
            </p>

            <div className="mt-7 space-y-6">
              <div className="flex items-center justify-between border-b border-[#172B3A]/10 pb-5">
                <span className="text-[#172B3A]/60">Destination</span>
                <span className="font-semibold text-[#172B3A]">
                  {destination.name}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#172B3A]/10 pb-5">
                <span className="text-[#172B3A]/60">Country</span>
                <span className="font-semibold text-[#172B3A]">
                  {destination.country}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#172B3A]/10 pb-5">
                <span className="text-[#172B3A]/60">Duration</span>
                <span className="font-semibold text-[#172B3A]">
                  {destination.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#172B3A]/60">Rating</span>
                <span className="flex items-center gap-2 font-semibold text-[#172B3A]">
                  <Star size={17} className="fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-24">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#238A83]">
            WHAT MAKES IT SPECIAL
          </p>

          <h2 className="text-4xl font-semibold text-[#172B3A] md:text-5xl">
            Travel highlights
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destination.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1.7rem] border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur-lg"
              >
                <CheckCircle2 size={27} className="text-[#238A83]" />

                <h3 className="mt-5 text-lg font-semibold leading-relaxed text-[#172B3A]">
                  {highlight}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Live Weather */}
        <WeatherCard destination={destination} />
        {/* Country Information */}
        <CountryInfo country={destination.country} />
        {/* CTA */}
        <section className="mt-24 overflow-hidden rounded-[2.5rem] bg-[#172B3A] p-8 md:p-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#A8E3D9]">
                YOUR NEXT ADVENTURE
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold text-white md:text-5xl">
                Ready to experience {destination.name}?
              </h2>

              <p className="mt-4 text-lg text-white/65">
                Your next unforgettable journey starts here.
              </p>
            </div>

            <Link
              to="/plan-trip"
              className="inline-flex items-center gap-3  rounded-full bg-[#238A83] px-6 py-4 font-semibold text-white transition hover:bg-[#1B6D67] "
            >
              Plan Your Trip
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default DestinationDetails;

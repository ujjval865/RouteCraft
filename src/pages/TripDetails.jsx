import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Compass,
  MapPin,
  Users,
  Wallet,
} from "lucide-react";

import trips from "../data/trips";

function TripDetails() {
  // Read trip ID from the URL.
  const { id } = useParams();

  // Find the trip that matches the URL ID.
  const trip = trips.find((item) => item.id === Number(id));

  // Show this when the URL ID does not match any trip.
  if (!trip) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F5EF] px-5 pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#172B3A]">Trip not found</h1>

          <p className="mt-3 text-lg text-[#172B3A]/60">
            We couldn't find the trip you're looking for.
          </p>

          <Link
            to="/my-trips"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#172B3A] px-6 py-3 font-semibold text-white transition hover:bg-[#238A83]"
          >
            <ArrowLeft size={19} />
            Back to My Trips
          </Link>
        </div>
      </main>
    );
  }

  const tripInfo = [
    {
      label: "Travel Dates",
      value: trip.dates,
      icon: CalendarDays,
    },
    {
      label: "Travelers",
      value: trip.travelers,
      icon: Users,
    },
    {
      label: "Travel Style",
      value: trip.travelStyle,
      icon: Compass,
    },
    {
      label: "Budget",
      value: trip.budget,
      icon: Wallet,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5EF] px-5 pb-24 pt-32 text-[#172B3A] sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Navigation */}
        <Link
          to="/my-trips"
          className="mb-8 inline-flex items-center gap-2 text-lg font-semibold text-[#172B3A]/65 transition hover:text-[#238A83]"
        >
          <ArrowLeft size={21} />
          Back to My Trips
        </Link>

        {/* Destination Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-xl sm:h-[500px]"
        >
          <img
            src={trip.image}
            alt={trip.destination}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/90 via-[#172B3A]/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-7 text-white sm:p-12">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-lg">
              <MapPin size={16} />
              {trip.country}
            </span>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              {trip.destination}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {trip.description}
            </p>
          </div>
        </motion.section>

        {/* Trip Information */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 -mt-8 grid grid-cols-1 gap-4 rounded-[2rem] border border-white/80 bg-white/65 p-6 shadow-[0_15px_50px_rgba(23,43,58,0.08)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8"
        >
          {tripInfo.map((info) => {
            const Icon = info.icon;

            return (
              <div key={info.label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#A8E3D9]/40 text-[#238A83]">
                  <Icon size={25} />
                </div>

                <div>
                  <p className="text-sm text-[#172B3A]/55">{info.label}</p>

                  <p className="mt-1 font-bold text-[#172B3A]">{info.value}</p>
                </div>
              </div>
            );
          })}
        </motion.section>

        {/* Itinerary Heading */}
        <section className="mt-20">
          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#238A83]">
              Your journey
            </span>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Trip itinerary
              <span className="text-[#238A83]">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-lg text-[#172B3A]/60">
              A day-by-day look at the experiences waiting for you.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative ml-3 space-y-7 border-l-2 border-[#238A83]/20 pl-8 sm:ml-6 sm:pl-12">
            {trip.itinerary.map((day, index) => (
              <motion.article
                key={day.day}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-3xl border border-white/80 bg-white/60 p-6 shadow-[0_12px_40px_rgba(23,43,58,0.05)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg sm:p-8"
              >
                <div className="absolute -left-[43px] top-8 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#F7F5EF] bg-[#238A83] sm:-left-[57px]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#238A83]">
                      Day {day.day}
                    </p>

                    <h3 className="text-2xl font-bold">{day.title}</h3>

                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#172B3A]/65 sm:text-lg">
                      {day.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A8E3D9]/40 text-[#238A83]">
                    <CheckCircle2 size={22} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 rounded-[2rem] border border-white/80 bg-white/55 p-8 text-center shadow-lg backdrop-blur-xl sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            More adventures await.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg text-[#172B3A]/60">
            Discover another destination and start planning your next journey.
          </p>

          <Link
            to="/explore"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#172B3A] px-7 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-[#238A83]"
          >
            Explore Destinations
            <Compass size={21} />
          </Link>
        </section>
      </div>
    </main>
  );
}

export default TripDetails;

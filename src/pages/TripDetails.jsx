
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  MapPin,
  Users,
  Wallet,
  Sparkles,
} from "lucide-react";

import { getTrips } from "../services/tripStorage";
import destinations from "../data/destinations";

// Format date
const formatDate = (date) => {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Calculate trip status
const getTripStatus = (startDate, endDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  if (end < today) return "Completed";
  if (start <= today && end >= today) return "Ongoing";

  return "Upcoming";
};

function TripDetails() {
  const { id } = useParams();

  // Find saved trip using its unique ID
  const trip = getTrips().find(
    (item) => item.id === Number(id)
  );

  // Handle invalid trip ID
  if (!trip) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F5EF] px-5 pt-24 text-[#172B3A]">
        <div className="text-center">
          <Compass
            size={55}
            className="mx-auto mb-5 text-[#238A83]"
          />

          <h1 className="text-4xl font-bold">
            Trip Not Found
          </h1>

          <p className="mt-3 text-lg text-[#172B3A]/60">
            This trip doesn't exist or may have been removed.
          </p>

          <Link
            to="/my-trips"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#172B3A] px-7 py-4 font-semibold text-white transition hover:bg-[#238A83]"
          >
            <ArrowLeft size={19} />
            Back to My Trips
          </Link>
        </div>
      </main>
    );
  }

  // Get destination information using destination ID
  const destination = destinations.find(
    (item) => item.id === Number(trip.destination)
  );

  const status = getTripStatus(
    trip.startDate,
    trip.endDate
  );

  const tripInfo = [
    {
      label: "Travel Dates",
      value: `${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}`,
      icon: CalendarDays,
    },
    {
      label: "Travelers",
      value: `${trip.travelers} People`,
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
          <ArrowLeft size={20} />
          Back to My Trips
        </Link>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] shadow-xl"
        >
          <img
            src={destination?.image}
            alt={destination?.name || "Travel destination"}
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/90 via-[#172B3A]/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-12">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
                {status}
              </span>

              {destination?.category && (
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
                  {destination.category}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={19} />
              <span className="text-lg">
                {destination?.country || "Unknown Country"}
              </span>
            </div>

            <h1 className="mt-3 text-5xl font-bold sm:text-7xl">
              {destination?.name || "Unknown Destination"}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              {destination?.description ||
                "Your next adventure is waiting for you."}
            </p>
          </div>
        </motion.section>

        {/* Trip Information */}
        <section className="mt-12">
          <div className="mb-7">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#238A83]">
              Your Journey
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Trip Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tripInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/80 bg-white/60 p-6 shadow-[0_12px_40px_rgba(23,43,58,0.05)] backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8E3D9]/35 text-[#238A83]">
                    <Icon size={24} />
                  </div>

                  <p className="text-base text-[#172B3A]/55">
                    {info.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {info.value}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Destination Highlights */}
        {destination?.highlights?.length > 0 && (
          <section className="mt-16">
            <div className="mb-7">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#238A83]">
                Explore More
              </p>

              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Destination Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destination.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/60 p-5 backdrop-blur-xl"
                >
                  <CheckCircle2
                    size={23}
                    className="shrink-0 text-[#238A83]"
                  />

                  <span className="text-lg font-medium">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-8 shadow-lg backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[#238A83]">
                <Sparkles size={21} />
                <span className="font-semibold">
                  More adventures await
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">
                Ready to plan your next journey?
              </h2>

              <p className="mt-4 text-lg text-[#172B3A]/60">
                Discover another destination and create new memories.
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#172B3A] px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-[#238A83]"
            >
              Explore More
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}

export default TripDetails;

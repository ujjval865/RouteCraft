import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
  Trash2,
} from "lucide-react";

function TripCard({ trip, index, onDelete }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 shadow-[0_15px_50px_rgba(23,43,58,0.07)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(23,43,58,0.13)]"
    >
      {/* Destination Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/70 via-transparent to-transparent" />

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md ${
            trip.status === "Upcoming"
              ? "bg-[#A8E3D9]/90 text-[#172B3A]"
              : "bg-white/85 text-[#172B3A]"
          }`}
        >
          {trip.status}
        </span>

        <div className="absolute bottom-5 left-6 text-white">
          <p className="mb-1 text-sm font-medium text-white/80">
            {trip.country}
          </p>

          <h3 className="text-3xl font-bold tracking-tight">
            {trip.destination}
          </h3>
        </div>
      </div>

      {/* Trip Information */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="shrink-0 text-[#238A83]" size={21} />

            <div>
              <p className="text-sm text-[#172B3A]/55">Travel Dates</p>
              <p className="font-semibold text-[#172B3A]">{trip.dates}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="shrink-0 text-[#238A83]" size={21} />

            <div>
              <p className="text-sm text-[#172B3A]/55">Travelers</p>
              <p className="font-semibold text-[#172B3A]">{trip.travelers}</p>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-[#172B3A]/10" />

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-[#172B3A]/55">Travel Style</p>
            <p className="font-semibold text-[#172B3A]">{trip.travelStyle}</p>
          </div>
          <button
            onClick={() => {
              if (window.confirm(`Delete trip to ${trip.destination}?`)) {
                onDelete(trip.id);
              }
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-500 hover:text-white"
            aria-label="Delete trip"
          >
            <Trash2 size={20} />
          </button>

          <Link
            to={`/my-trips/${trip.id}`}
            aria-label={`View ${trip.destination} trip details`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#172B3A] text-white transition-all duration-300 hover:rotate-45 hover:bg-[#238A83]"
          >
            <ArrowUpRight size={23} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default TripCard;

import { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { saveTrip } from "../services/tripStorage";
import {
  MapPin,
  CalendarDays,
  Users,
  Wallet,
  Compass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Mountain,
  Waves,
  Camera,
  Heart,
  Check,
} from "lucide-react";

import destinations from "../data/destinations";

const travelStyles = [
  { name: "Adventure", icon: Mountain },
  { name: "Relaxation", icon: Waves },
  { name: "Culture", icon: Camera },
  { name: "Romantic", icon: Heart },
];

function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [budget, setBudget] = useState("Moderate");
  const [travelStyle, setTravelStyle] = useState("Adventure");
  const [submitted, setSubmitted] = useState(false);

  const [tripData, setTripData] = useState(null);

  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!destination || !startDate || !endDate) return;

  if (endDate <= startDate) {
    alert("End date must be after start date.");
    return;
  }

  const newTrip = {
    destination,
    startDate,
    endDate,
    travelers,
    budget,
    travelStyle,
  };

  try {
    const updatedTrips = saveTrip(newTrip);

    console.log("Saved Trips:", updatedTrips);
    console.log(
      "LocalStorage:",
      localStorage.getItem("routecraft_trips")
    );

    navigate("/my-trips");
  } catch (error) {
    console.error("Unable to save trip:", error);
    alert("Could not save your trip. Please try again.");
  }
};

  return (
    <main className="min-h-screen bg-[#F7F5EF] px-5 pb-24 pt-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <Link
            to="/explore"
            className="mb-8 inline-flex items-center gap-2 text-[#172B3A]/60 transition-colors hover:text-[#238A83]"
          >
            <ArrowLeft size={18} />
            Back to Explore
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#238A83]/20 bg-white/60 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#238A83] backdrop-blur-xl">
              <Sparkles size={15} />
              Your Next Adventure
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              Let's craft your
              <span className="font-serif italic text-[#238A83]">
                {" "}
                perfect trip.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#172B3A]/60">
              Tell us a little about your travel plans. We'll help you get
              started on an unforgettable journey.
            </p>
          </motion.div>
        </div>

        {/* FORM LAYOUT */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-white/80 bg-white/60 p-6 shadow-xl shadow-[#172B3A]/5 backdrop-blur-2xl md:p-10"
          >
            {/* DESTINATION */}
            <div>
              <label className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <MapPin className="text-[#238A83]" />
                Where do you want to go?
              </label>

              <select
                required
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setSubmitted(false);
                }}
                className="..."
              >
                <option value="">Choose a destination</option>

                {destinations.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}, {item.country}
                  </option>
                ))}
              </select>
            </div>

            {/* DATES */}
            <div className="mt-9">
              <label className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <CalendarDays className="text-[#238A83]" />
                When are you travelling?
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#172B3A]/60">
                    Start Date
                  </label>

                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setSubmitted(false);
                    }}
                    className="w-full rounded-2xl border border-[#172B3A]/10 bg-white/80 px-4 py-4 outline-none focus:border-[#238A83]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#172B3A]/60">
                    End Date
                  </label>

                  <input
                    required
                    type="date"
                    min={startDate || new Date().toISOString().split("T")[0]}
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      setSubmitted(false);
                    }}
                    className="w-full rounded-2xl border border-[#172B3A]/10 bg-white/80 px-4 py-4 outline-none focus:border-[#238A83]"
                  />
                </div>
              </div>
            </div>

            {/* TRAVELERS */}
            <div className="mt-9">
              <label className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Users className="text-[#238A83]" />
                Who's travelling?
              </label>

              <select
                value={travelers}
                onChange={(e) => {
                  setTravelers(e.target.value);
                  setSubmitted(false);
                }}
                className="w-full rounded-2xl border border-[#172B3A]/10 bg-white/80 px-5 py-4 text-lg outline-none focus:border-[#238A83]"
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5 Travellers</option>
                <option value="6">6 Travellers</option>
                <option value="7+">7+ Travellers</option>
              </select>
            </div>

            {/* BUDGET */}
            <div className="mt-9">
              <label className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Wallet className="text-[#238A83]" />
                What's your budget?
              </label>

              <div className="grid grid-cols-3 gap-3">
                {["Budget", "Moderate", "Luxury"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setBudget(item);
                      setSubmitted(false);
                    }}
                    className={`rounded-2xl border px-3 py-4 text-sm font-semibold transition-all md:text-base ${
                      budget === item
                        ? "border-[#238A83] bg-[#A8E3D9]/30 text-[#238A83]"
                        : "border-[#172B3A]/10 bg-white/70 text-[#172B3A]/60 hover:border-[#238A83]/50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* TRAVEL STYLE */}
            <div className="mt-9">
              <label className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Compass className="text-[#238A83]" />
                Choose your travel style
              </label>

              <div className="grid grid-cols-2 gap-3">
                {travelStyles.map((style) => {
                  const Icon = style.icon;
                  const active = travelStyle === style.name;

                  return (
                    <button
                      key={style.name}
                      type="button"
                      onClick={() => {
                        setTravelStyle(style.name);
                        setSubmitted(false);
                      }}
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                        active
                          ? "border-[#238A83] bg-[#A8E3D9]/30 text-[#238A83]"
                          : "border-[#172B3A]/10 bg-white/70 hover:border-[#238A83]/50"
                      }`}
                    >
                      <Icon size={22} />
                      <span className="font-medium">{style.name}</span>

                      {active && <Check size={17} className="ml-auto" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#172B3A] px-8 py-5 text-lg font-semibold text-white shadow-xl shadow-[#172B3A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#238A83]"
            >
              Create My Trip
              <ArrowRight size={21} />
            </button>

            {tripData && (
              <div className="mt-8 rounded-3xl border border-[#238A83]/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
                <h2 className="mb-5 text-2xl font-bold text-[#172B3A]">
                  Your Trip Summary
                </h2>

                <div className="space-y-4 text-lg text-[#172B3A]">
                  <p>
                    <strong>Destination:</strong>{" "}
                    {
                      destinations.find(
                        (item) => item.id === Number(tripData.destination),
                      )?.name
                    }
                  </p>

                  <p>
                    <strong>Start Date:</strong> {tripData.startDate}
                  </p>

                  <p>
                    <strong>End Date:</strong> {tripData.endDate}
                  </p>

                  <p>
                    <strong>Travelers:</strong> {tripData.travelers}
                  </p>

                  <p>
                    <strong>Budget:</strong> {tripData.budget}
                  </p>

                  <p>
                    <strong>Travel Style:</strong> {tripData.travelStyle}
                  </p>
                </div>
              </div>
            )}
          </motion.form>

          {/* SIDE PANEL */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-xl shadow-[#172B3A]/5 backdrop-blur-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900"
              alt="Peaceful travel destination"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#238A83]">
                A little inspiration
              </span>

              <h3 className="mt-4 text-3xl font-semibold">
                Your journey, your way.
              </h3>

              <p className="mt-4 leading-relaxed text-[#172B3A]/60">
                Every great adventure starts with a destination and a little
                curiosity. Take your time and create a journey that feels like
                yours.
              </p>

              <div className="mt-7 border-t border-[#172B3A]/10 pt-6">
                <p className="text-sm font-semibold text-[#172B3A]/50">
                  NEED SOME INSPIRATION?
                </p>

                <Link
                  to="/explore"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-[#238A83] hover:gap-4"
                >
                  Browse destinations
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

export default TripPlanner;

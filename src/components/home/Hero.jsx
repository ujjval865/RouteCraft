import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-[900px] overflow-hidden bg-[#172B3A] px-4 pb-12 pt-32 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90"
          alt="Beautiful alpine lake surrounded by mountains"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101E2B]/90 via-[#172B3A]/50 to-[#172B3A]/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101E2B]/90 via-transparent to-[#101E2B]/25" />

      {/* Ambient Glow */}
      <div className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#238A83]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
            >
              <Sparkles size={17} className="text-[#8CE0D4]" />

              <span className="text-sm font-medium tracking-[0.16em] text-white/90 sm:text-base">
                DISCOVER THE EXTRAORDINARY
              </span>

              <span className="h-2 w-2 rounded-full bg-[#8CE0D4] shadow-[0_0_12px_#8CE0D4]" />
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                Escape the
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-2 block font-serif font-normal italic text-[#A8E3D9]"
              >
                ordinary.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-2 block"
              >
                Find your world.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg lg:text-xl"
            >
              Discover breathtaking destinations, create unforgettable journeys,
              and turn your travel dreams into stories worth telling.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#destinations"
                className="group flex items-center gap-3 rounded-full bg-[#A8E3D9] px-7 py-4 font-semibold text-[#172B3A] shadow-[0_12px_40px_rgba(35,138,131,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_45px_rgba(35,138,131,0.4)] sm:text-lg"
              >
                Explore Destinations
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-medium text-white backdrop-blur-lg transition-all duration-300 hover:border-white/60 hover:bg-white/20 sm:text-lg"
              >
                Discover More
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Floating Destination Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="relative hidden h-[470px] items-center justify-center lg:flex"
          >
            {/* Decorative Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-[#A8E3D9]/20 blur-[100px]" />

            {/* Floating Glass Card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[340px] overflow-hidden rounded-[32px] border border-white/30 bg-white/15 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
            >
              <div className="relative h-[270px] overflow-hidden rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85"
                  alt="Beautiful northern lights over a mountain landscape"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
                  <Sparkles size={15} className="text-[#A8E3D9]" />
                  Editor's Pick
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium text-white/80">
                    EXPERIENCE THE MAGIC
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold">Iceland</h3>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-5 text-white">
                <div>
                  <p className="text-sm text-white/65">
                    Discover somewhere new
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Your next adventure awaits.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A8E3D9] text-[#172B3A]">
                  <ArrowUpRight size={23} />
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, 3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-10 rounded-2xl border border-white/30 bg-white/15 px-5 py-4 shadow-xl backdrop-blur-2xl"
            >
              <p className="text-sm text-white/70">Made for explorers</p>
              <p className="mt-1 text-xl font-bold text-white">Go Beyond.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Glass Search Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-20 rounded-[28px] border border-white/25 bg-white/[0.13] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6 lg:mt-14 lg:p-7"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Plan your next escape
              </p>
              <p className="mt-1 text-sm text-white/65 sm:text-base">
                Find the perfect destination for your next journey.
              </p>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#A8E3D9] sm:flex">
              <Search size={22} />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_1fr_auto]">
            {/* Destination */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-colors hover:bg-white/15">
              <MapPin className="shrink-0 text-[#A8E3D9]" size={23} />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-white/65"
                >
                  Destination
                </label>

                <input
                  id="destination"
                  type="text"
                  placeholder="Where do you want to go?"
                  className="mt-1 w-full bg-transparent text-base font-medium text-white outline-none placeholder:text-white/55 sm:text-lg"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-colors hover:bg-white/15">
              <CalendarDays className="shrink-0 text-[#A8E3D9]" size={23} />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="travel-date"
                  className="block text-sm font-medium text-white/65"
                >
                  Travel Date
                </label>

                <input
                  id="travel-date"
                  type="date"
                  className="mt-1 w-full bg-transparent text-base font-medium text-white outline-none [color-scheme:dark] sm:text-lg"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-colors hover:bg-white/15">
              <Users className="shrink-0 text-[#A8E3D9]" size={23} />

              <div className="min-w-0 flex-1">
                <label
                  htmlFor="travelers"
                  className="block text-sm font-medium text-white/65"
                >
                  Travelers
                </label>

                <select
                  id="travelers"
                  defaultValue="2"
                  className="mt-1 w-full bg-transparent text-base font-medium text-white outline-none sm:text-lg"
                >
                  <option value="1" className="text-[#172B3A]">
                    1 Person
                  </option>
                  <option value="2" className="text-[#172B3A]">
                    2 People
                  </option>
                  <option value="3" className="text-[#172B3A]">
                    3 People
                  </option>
                  <option value="4" className="text-[#172B3A]">
                    4 People
                  </option>
                  <option value="5" className="text-[#172B3A]">
                    5+ People
                  </option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <a
              href="#destinations"
              className="group flex min-h-[76px] items-center justify-center gap-3 rounded-2xl bg-[#A8E3D9] px-7 font-semibold text-[#172B3A] shadow-[0_10px_30px_rgba(35,138,131,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(35,138,131,0.3)]"
            >
              <Search size={21} />
              <span className="text-lg">Search</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white/70">
            <div className="flex -space-x-3">
              {[
                "photo-1534528741775-53994a69daeb",
                "photo-1500648767791-00dcc994a43e",
                "photo-1531123897727-8f129e1688ce",
              ].map((photo) => (
                <img
                  key={photo}
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                  alt="Traveler"
                  className="h-10 w-10 rounded-full border-2 border-[#172B3A] object-cover"
                />
              ))}
            </div>

            <p className="text-sm sm:text-base">
              Made for people who love exploring.
            </p>
          </div>

          <a
            href="#destinations"
            className="group flex items-center gap-3 text-sm font-medium text-white/80 transition-colors hover:text-[#A8E3D9] sm:text-base"
          >
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-[#A8E3D9] group-hover:bg-[#A8E3D9]/15">
              <ArrowDown size={17} className="animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

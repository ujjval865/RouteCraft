
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  Heart,
  ShieldCheck,
  MapPin,
  Sparkles,
  Mountain,
  Camera,
  Route,
  Earth,
  Plane,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Compass,
    title: "Explore Freely",
    description:
      "Discover destinations that inspire you. From peaceful beaches to breathtaking mountains, your next adventure starts with curiosity.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Travel with Meaning",
    description:
      "We believe the best journeys aren't measured in miles, but in the memories, experiences and stories you bring home.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Plan with Confidence",
    description:
      "Find useful destination information and travel inspiration in one place, so you can make more informed travel decisions.",
  },
];

const features = [
  {
    icon: Globe2,
    title: "Discover Destinations",
    description:
      "Explore beautiful places around the world and find destinations that match your travel interests.",
  },
  {
    icon: MapPin,
    title: "Explore Every Detail",
    description:
      "Get destination descriptions, highlights, ratings and trip duration information before choosing your next stop.",
  },
  {
    icon: Route,
    title: "Find Your Inspiration",
    description:
      "Browse different travel categories, from mountains and beaches to culture, nature and adventure.",
  },
  {
    icon: Sparkles,
    title: "A Simple Experience",
    description:
      "Enjoy a clean, modern interface designed to make discovering your next destination feel effortless.",
  },
];

const journey = [
  {
    number: "01",
    title: "Get Inspired",
    description:
      "Start by exploring destinations and discovering places you may have never considered.",
  },
  {
    number: "02",
    title: "Find Your Place",
    description:
      "Use categories and search to narrow down destinations that fit your interests.",
  },
  {
    number: "03",
    title: "Explore the Details",
    description:
      "Open a destination to learn about its highlights and get a better idea of the experience.",
  },
  {
    number: "04",
    title: "Start Your Adventure",
    description:
      "Choose the destination that excites you and take the next step towards your journey.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function About() {
  return (
    <main className="overflow-hidden bg-[#F7F5EF] text-[#172B3A]">

      {/* HERO SECTION */}
      <section className="px-5 pb-24 pt-36 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#238A83]/20 bg-white/60 px-5 py-2 text-sm font-semibold tracking-wider text-[#238A83] shadow-lg shadow-[#172B3A]/5 backdrop-blur-xl">
              <Sparkles size={15} />
              THE STORY OF ROUTECRAFT
            </span>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
              Every journey
              <br />
              begins with a
              <span className="font-serif italic text-[#238A83]">
                {" "}dream.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#172B3A]/65 md:text-xl">
              The world is full of places waiting to be discovered.
              RouteCraft brings travel inspiration and destination
              discovery together to help you find your next adventure.
            </p>

            <Link
              to="/explore"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#172B3A] px-8 py-4 font-semibold text-white shadow-xl shadow-[#172B3A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#238A83]"
            >
              Explore Destinations
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-[#A8E3D9]/40 via-white/30 to-[#238A83]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-2xl shadow-[#172B3A]/10">
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800"
                alt="Beautiful mountain lake surrounded by nature"
                className="h-[420px] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 md:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/75 via-transparent to-[#10242D]/10" />

              <div className="absolute inset-x-5 bottom-6 flex flex-col gap-5 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A8E3D9]">
                    Beyond the ordinary
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                    The world is yours to explore.
                  </h2>
                </div>

                <div className="hidden rounded-2xl border border-white/30 bg-white/15 p-5 text-white shadow-xl backdrop-blur-xl md:block">
                  <Globe2 size={28} />
                  <p className="mt-3 text-lg font-medium">
                    Discover more.
                  </p>
                  <p className="text-sm text-white/70">
                    Experience everything.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center justify-center gap-3 text-sm font-medium text-[#172B3A]/45"
          >
            <ArrowDown size={16} />
            SCROLL TO DISCOVER OUR STORY
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#238A83]">
              01 — Our Story
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              It started with a simple idea.
              <span className="font-serif italic text-[#238A83]">
                {" "}Explore more.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#172B3A]/65">
              <p>
                We believe travel is one of the most beautiful ways
                to experience life. Every destination has something
                unique to offer — a different culture, a new perspective,
                or a memory waiting to happen.
              </p>

              <p>
                But finding the right destination can sometimes feel
                overwhelming. Too many choices, scattered information
                and endless searching can take away the excitement
                of planning a trip.
              </p>

              <p>
                That's where RouteCraft comes in. We imagined a place
                where discovering destinations feels simple, inspiring
                and enjoyable — a starting point for people who love
                exploring the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
              alt="Traveler enjoying a beautiful landscape"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -left-3 max-w-[270px] rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-2xl md:-left-10">
              <Lightbulb size={30} className="text-[#238A83]" />
              <p className="mt-4 text-xl font-semibold">
                A little inspiration can lead to a lifetime of memories.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 35 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 p-8 shadow-xl shadow-[#172B3A]/5 backdrop-blur-2xl md:p-12"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#A8E3D9]/30 blur-3xl" />

            <div className="relative">
              <Compass size={35} className="text-[#238A83]" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#238A83]">
                Our Mission
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Make discovering the world feel effortless.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#172B3A]/65">
                Our mission is to make destination discovery easier
                and more enjoyable by bringing travel inspiration,
                useful information and a thoughtful experience
                together.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 35 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#238A83]/20 bg-[#172B3A] p-8 text-white shadow-xl shadow-[#172B3A]/10 md:p-12"
          >
            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#238A83]/30 blur-3xl" />

            <div className="relative">
              <Globe2 size={35} className="text-[#A8E3D9]" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#A8E3D9]">
                Our Vision
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                A world where every journey starts with inspiration.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/65">
                We envision RouteCraft growing into a trusted
                travel companion that helps people discover
                places, shape their ideas and make travel planning
                a memorable experience.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHAT ROUTECRAFT OFFERS */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#238A83]">
              02 — What We Offer
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Everything begins with
              <span className="font-serif italic text-[#238A83]">
                {" "}discovery.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#172B3A]/60">
              RouteCraft is designed to make exploring destinations
              easier. Here's what you can discover on the platform.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[2rem] border border-white/80 bg-white/55 p-8 shadow-lg shadow-[#172B3A]/5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/85 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A8E3D9]/40 text-[#238A83] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <ArrowUpRight
                      size={23}
                      className="text-[#172B3A]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#238A83]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-[#172B3A]/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRAVEL CATEGORIES IMAGE STRIP */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#238A83]">
                03 — Find Your Escape
              </span>
              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                Different places.
                <br />
                <span className="font-serif italic text-[#238A83]">
                  Endless possibilities.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-[#172B3A]/60">
              Whether you love nature, adventure or culture,
              there's always somewhere new to discover.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-[390px] overflow-hidden rounded-[2rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
                alt="Mountains"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/80 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <Mountain size={28} />
                <h3 className="mt-4 text-3xl font-semibold">Mountains</h3>
                <p className="mt-2 text-white/70">Find your altitude.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-[390px] overflow-hidden rounded-[2rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
                alt="Tropical beach"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/80 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <Camera size={28} />
                <h3 className="mt-4 text-3xl font-semibold">Beaches</h3>
                <p className="mt-2 text-white/70">Escape into blue.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-[390px] overflow-hidden rounded-[2rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900"
                alt="Beautiful city at night"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/80 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <Plane size={28} />
                <h3 className="mt-4 text-3xl font-semibold">Adventure</h3>
                <p className="mt-2 text-white/70">Go beyond limits.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#238A83]">
              04 — Our Values
            </span>

            <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
              What makes a journey
              <span className="font-serif italic text-[#238A83]">
                {" "}meaningful?
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="rounded-[2rem] border border-white/80 bg-white/50 p-8 shadow-lg shadow-[#172B3A]/5 backdrop-blur-2xl md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={32} className="text-[#238A83]" />
                    <span className="text-sm font-semibold text-[#238A83]/60">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-[#172B3A]/60">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#238A83]">
              05 — Your Journey
            </span>

            <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
              From inspiration
              <span className="font-serif italic text-[#238A83]">
                {" "}to exploration.
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-[#238A83]/20 md:block" />

            <div className="space-y-5">
              {journey.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="relative grid gap-5 rounded-[2rem] border border-white/80 bg-white/55 p-7 shadow-lg shadow-[#172B3A]/5 backdrop-blur-xl md:grid-cols-[70px_1fr_1.2fr] md:items-center md:p-9"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#238A83]/30 bg-[#A8E3D9]/30 font-semibold text-[#238A83]">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-[#172B3A]/60">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-28 pt-20 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#172B3A] px-7 py-20 text-center shadow-2xl shadow-[#172B3A]/15 md:px-16"
        >
          <div className="absolute -left-20 -top-28 h-80 w-80 rounded-full bg-[#238A83]/30 blur-[90px]" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#A8E3D9]/20 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#A8E3D9] backdrop-blur-xl">
              <Sparkles size={15} />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-7xl">
              Somewhere out there,
              <span className="font-serif italic text-[#A8E3D9]">
                {" "}your place is waiting.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Stop dreaming about the places you want to see.
              Start discovering them with RouteCraft.
            </p>

            <Link
              to="/explore"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#A8E3D9] px-8 py-4 font-semibold text-[#172B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Start Exploring
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default About;

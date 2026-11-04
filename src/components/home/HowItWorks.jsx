
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  MapPinned,
  Luggage,
  Sparkles,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Find your inspiration.",
    description:
      "Explore incredible destinations and discover the places that make you want to pack your bags.",
    tag: "EXPLORE",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Build your journey.",
    description:
      "Choose your destination, organize your travel plans, and create an itinerary that feels like yours.",
    tag: "PLAN",
  },
  {
    number: "03",
    icon: Luggage,
    title: "Make it happen.",
    description:
      "Get ready to experience new cultures, unforgettable views, and moments worth remembering.",
    tag: "EXPERIENCE",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-15 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial heading */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#238A83]" />
              <span className="text-sm font-bold tracking-[0.22em] text-[#238A83]">
                THE ROUTECRAFT EXPERIENCE
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#172B3A] md:text-7xl lg:text-8xl">
              From a dream
              <br />
              to a <span className="font-serif font-normal italic text-[#238A83]">destination.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="max-w-lg text-lg leading-relaxed text-[#66757C] md:text-xl">
              Every unforgettable adventure starts somewhere. We make the
              journey from your first idea to your next adventure feel simple.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-bold tracking-widest text-[#238A83]">
              THREE SIMPLE STEPS
              <ArrowDownRight size={20} />
            </div>
          </motion.div>
        </div>

        {/* Main experience layout */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Animated timeline */}
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[27px] top-8 w-px bg-gradient-to-b from-[#238A83] via-[#A8E3D9] to-transparent"
            />

            <div className="space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.18,
                      ease: "easeOut",
                    }}
                    className="group relative flex gap-6"
                  >
                    {/* Timeline icon */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#A8E3D9] bg-[#F7F5EF] text-[#238A83] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#238A83] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    {/* Glass content */}
                    <div className="flex-1 rounded-[1.8rem] border border-white/80 bg-white/45 p-6 shadow-[0_12px_45px_rgba(23,43,58,0.035)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#A8E3D9] group-hover:bg-white/75 group-hover:shadow-[0_20px_55px_rgba(23,43,58,0.08)] md:p-8">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#238A83]">
                          {step.tag}
                        </span>

                        <span className="text-sm font-semibold text-[#A6B1AD]">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#172B3A] md:text-3xl">
                        {step.title}
                      </h3>

                      <p className="text-base leading-relaxed text-[#718087] md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cinematic visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] md:min-h-[650px]"
          >
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=90"
              alt="Beautiful mountain landscape with a peaceful lake"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/70 via-transparent to-[#10242D]/10" />

            {/* Floating glass badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-5 top-7 rounded-2xl border border-white/30 bg-white/15 p-4 text-white shadow-xl backdrop-blur-2xl md:right-8 md:top-9 md:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Your next adventure</p>
                  <p className="text-xs text-white/70">Starts right here</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom glass panel */}
            <div className="absolute inset-x-5 bottom-5 rounded-[1.8rem] border border-white/25 bg-white/15 p-6 text-white shadow-2xl backdrop-blur-2xl md:inset-x-8 md:bottom-8 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[#A8E3D9]">
                  THE WORLD IS YOURS
                </span>

                <ArrowUpRight size={22} />
              </div>

              <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Less planning stress.
                <br />
                More living moments.
              </h3>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Discover", "Plan", "Explore"].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/90"
                  >
                    <Check size={14} className="text-[#A8E3D9]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

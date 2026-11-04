
import { motion } from "motion/react";
import {
  Compass,
  Map,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Compass,
    title: "Discover hidden gems",
    description:
      "Find extraordinary destinations beyond the usual tourist spots and discover places worth remembering.",
  },
  {
    number: "02",
    icon: Map,
    title: "Plan without the stress",
    description:
      "Organize your travel ideas, explore destinations, and bring every part of your journey together.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Experiences that matter",
    description:
      "Explore experiences that match your travel style, whether you love adventure, culture, or relaxation.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Travel with confidence",
    description:
      "Make informed travel decisions with useful destination information and thoughtfully organized plans.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-15 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#238A83]" />
              <span className="text-sm font-bold tracking-[0.2em] text-[#238A83]">
                WHY ROUTECRAFT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#172B3A] md:text-6xl lg:text-7xl"
            >
              Travel should feel
              <br />
              <span className="font-serif font-normal italic text-[#238A83]">
                extraordinary.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-lg leading-relaxed text-[#66757C] md:text-xl">
              Great journeys begin with great planning. RouteCraft brings
              inspiration and organization together to make your next
              adventure easier to plan.
            </p>

            <a
              href="#destinations"
              className="mt-7 inline-flex items-center gap-3 font-semibold text-[#172B3A] transition-colors hover:text-[#238A83]"
            >
              Explore our destinations
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E9E1D3] bg-white/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#A8E3D9] hover:bg-white hover:shadow-xl hover:shadow-[#172B3A]/5 md:p-10"
              >
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F3EF] text-[#238A83] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#238A83] group-hover:text-white">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#A6B1AD]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#172B3A] transition-colors group-hover:text-[#238A83] md:text-3xl">
                  {feature.title}
                </h3>

                <p className="max-w-lg text-lg leading-relaxed text-[#718087]">
                  {feature.description}
                </p>

                <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#A8E3D9]/20 blur-3xl transition-all duration-500 group-hover:bg-[#238A83]/20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 rounded-[2rem] bg-[#172B3A] p-8 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#A8E3D9]">
              YOUR JOURNEY, YOUR WAY
            </p>
            <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
              The world is waiting. Where will you go next?
            </h3>
          </div>

          <a
            href="#destinations"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#A8E3D9] px-7 py-4 font-semibold text-[#172B3A] transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            Find your destination
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Star } from "lucide-react";

function DestinationCard({ destination, index }) {
  const { name, country, category, image, rating, duration, size } =
    destination;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative h-[420px] overflow-hidden rounded-[2rem] ${
        size === "large" ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/90 via-[#10242D]/20 to-transparent" />

      <div className="absolute left-6 top-6 flex flex-wrap gap-3">
        <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-lg">
          {category}
        </span>

        <span className="flex items-center gap-1 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-lg">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm text-white/75">
            <MapPin size={15} />
            {country}
          </p>

          <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {name}
          </h3>

          <p className="mt-3 text-base text-white/70">{duration}</p>
        </div>

        <button
          type="button"
          aria-label={`Explore ${name}`}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#172B3A] transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-[#A8E3D9]"
        >
          <ArrowUpRight size={25} />
        </button>
      </div>
    </motion.div>
  );
}

export default DestinationCard;

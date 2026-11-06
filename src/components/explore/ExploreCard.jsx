import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ExploreCard({ destination, index }) {
  const { name, country, category, image, rating, duration } = destination;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative h-[420px] overflow-hidden rounded-[2rem] shadow-[0_15px_40px_rgba(23,43,58,0.08)]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/90 via-[#10242D]/10 to-transparent" />

      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-lg">
          {category}
        </span>

        <span className="flex items-center gap-1 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-sm text-white backdrop-blur-lg">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm text-white/75">
            <MapPin size={15} />
            {country}
          </p>

          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            {name}
          </h3>

          <p className="mt-2 text-sm text-white/70">{duration}</p>
        </div>

        <Link
          to={`/destination/${destination.id}`}
          aria-label={`Explore ${name}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#172B3A] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#A8E3D9]"
        >
          <ArrowUpRight size={23} />
        </Link>
      </div>
    </motion.article>
  );
}

export default ExploreCard;

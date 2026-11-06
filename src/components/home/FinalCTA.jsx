
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Sparkles,
} from "lucide-react";

function FinalCTA() {
  return (
    <section
      className="overflow-hidden bg-[#F7F5EF] px-6 py-15 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative isolate min-h-[570px] overflow-hidden rounded-[2.5rem] md:min-h-[650px] md:rounded-[3rem]"
        >
          {/* Background image */}
          <motion.img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
            alt="Majestic mountains waiting to be explored"
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 -z-10 bg-[#10242D]/45" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10242D]/85 via-[#10242D]/40 to-transparent" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10242D]/70 via-transparent to-transparent" />

          {/* Ambient glass decoration */}
          <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#A8E3D9]/20 blur-[100px]" />

          {/* Floating glass element */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-8 top-8 hidden rounded-2xl border border-white/25 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-2xl md:block lg:right-14 lg:top-14"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Compass size={22} />
              </div>
              <div>
                <p className="font-semibold">Your next chapter</p>
                <p className="text-sm text-white/65">Starts with a destination</p>
              </div>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="flex min-h-[570px] flex-col justify-center px-7 py-16 md:min-h-[650px] md:px-16 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold tracking-wider text-white backdrop-blur-xl"
            >
              <Sparkles size={16} className="text-[#A8E3D9]" />
              YOUR NEXT ADVENTURE STARTS HERE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-7xl lg:text-8xl"
            >
              Don't just
              <br />
              dream about
              <br />
              <span className="font-serif font-normal italic text-[#A8E3D9]">
                somewhere.
              </span>
              <br />
              Go there.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
            >
              Your world is bigger than your routine. Discover new places,
              plan your journey, and make memories that stay with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#destinations"
                className="group/button inline-flex items-center gap-3 rounded-full bg-[#A8E3D9] px-7 py-4 font-semibold text-[#172B3A] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Start exploring
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                How it works
                <ArrowUpRight size={19} />
              </a>
            </motion.div>
          </div>

          {/* Bottom glass strip */}
          <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/20 bg-white/10 px-8 py-5 backdrop-blur-2xl md:flex md:items-center md:justify-between md:px-14">
            <p className="text-sm font-medium tracking-wide text-white/80">
              EXPLORE MORE. EXPERIENCE MORE.
            </p>

            <p className="flex items-center gap-2 text-sm text-white/80">
              Made for curious travellers
              <Sparkles size={16} className="text-[#A8E3D9]" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;

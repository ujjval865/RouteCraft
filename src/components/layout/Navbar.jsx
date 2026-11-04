
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Explore", href: "#destinations" },
  { name: "About", href: "#about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-5 left-0 z-50 w-full px-4 sm:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-5 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl md:px-8">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172B3A] text-white">
            <Compass size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-[#172B3A]">
            Route<span className="text-[#238A83]">Craft.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 transition-colors duration-300 hover:text-[#238A83]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a
            href="#explore"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-[#172B3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#238A83]"
          >
            Start Exploring
            <ArrowUpRight size={17} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172B3A] text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-[#172B3A]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#explore"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#238A83] py-3 font-semibold text-white"
              >
                Start Exploring
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Compass,
  Send,
  MapPin,
  Mail,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Company: [
    { label: "About RouteCraft", href: "#about" },
    { label: "Contact", href: "mailto:hello@routecraft.com" },
    { label: "Home", href: "#home" },
  ],
};

const socialLinks = [
  {
    icon: "fa-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/forntendfuel/",
  },
  {
    icon: "fa-linkedin-in",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ujjval-gahlot-484516406/",
  },
  {
    icon: "fa-facebook-f",
    label: "Facebook",
    href: "https://facebook.com/",
  },
  {
    icon: "fa-github",
    label: "GitHub",
    href: "https://github.com/ujjval865",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F7F5EF]   pt-16  ">
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#A8E3D9]/20 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto  overflow-hidden  border border-white/80 bg-white/55 p-8 shadow-[0_20px_70px_rgba(23,43,58,0.07)] backdrop-blur-xl md:p-12 lg:p-14"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <a href="#home" className="mb-6 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#172B3A] text-[#A8E3D9]">
                <Compass size={27} />
              </span>

              <span className="text-2xl font-bold tracking-tight text-[#172B3A]">
                Route<span className="text-[#238A83]">Craft.</span>
              </span>
            </a>

            <p className="max-w-md text-lg leading-relaxed text-[#172B3A]/65">
              Discover new places, create unforgettable memories, and turn your
              travel dreams into beautiful journeys.
            </p>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#172B3A]/50">
                Follow our journey
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5, scale: 1.08 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#172B3A]/10 bg-white/80 text-lg text-[#172B3A] shadow-sm transition-colors duration-300 hover:border-[#238A83] hover:bg-[#238A83] hover:text-white"
                  >
                    <i className={`fa-brands ${social.icon}`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="mb-6 text-lg font-bold text-[#172B3A]">
                  {heading}
                </h3>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-base text-[#172B3A]/65 transition-colors duration-300 hover:text-[#238A83]"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={15}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-bold text-[#172B3A]">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:hello@routecraft.com"
                className="group flex items-start gap-3 text-[#172B3A]/65 transition-colors hover:text-[#238A83]"
              >
                <Mail size={20} className="mt-1 shrink-0 text-[#238A83]" />
                <span className="text-base">hello@routecraft.com</span>
              </a>

              <div className="flex items-start gap-3 text-[#172B3A]/65">
                <MapPin size={20} className="mt-1 shrink-0 text-[#238A83]" />
                <span className="text-base">
                  Explore the world,
                  <br />
                  one journey at a time.
                </span>
              </div>
            </div>

            <a
              href="#destinations"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#172B3A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#238A83]"
            >
              Start Exploring
              <Send size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#172B3A]/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-[#172B3A]/55">
            © {new Date().getFullYear()} RouteCraft. All rights reserved.
          </p>

          <p className="text-sm text-[#172B3A]/55">
            Crafted with care for explorers.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#172B3A]/15 bg-white text-[#172B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#172B3A] hover:text-white"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;

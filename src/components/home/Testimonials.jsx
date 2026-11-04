
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Sophie Williams",
    location: "London, United Kingdom",
    trip: "Swiss Alps Adventure",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
    destination:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=90",
    review:
      "Some journeys stay with you forever. Planning my Switzerland trip felt effortless, and every moment turned into a beautiful memory.",
    rating: 5,
  },
  {
    name: "Daniel Carter",
    location: "New York, USA",
    trip: "Bali Escape",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
    destination:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=90",
    review:
      "I always wanted to explore Bali. Having my travel ideas organized in one place made the whole experience feel much more exciting.",
    rating: 5,
  },
  {
    name: "Emma Anderson",
    location: "Sydney, Australia",
    trip: "Santorini Getaway",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=85",
    destination:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=90",
    review:
      "The best part of travelling is discovering somewhere completely new. This experience made planning feel simple and inspiring.",
    rating: 5,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#F7F5EF] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#238A83]" />
              <span className="text-sm font-bold tracking-[0.2em] text-[#238A83]">
                STORIES FROM THE ROAD
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#172B3A] md:text-7xl"
            >
              Not just trips.
              <br />
              <span className="font-serif font-normal italic text-[#238A83]">
                Beautiful memories.
              </span>
            </motion.h2>
          </div>

          <p className="max-w-sm text-lg leading-relaxed text-[#66757C]">
            Every destination has a story. Here are a few from travelers who
            turned their plans into unforgettable memories.
          </p>
        </div>

        {/* Testimonial experience */}
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Destination image */}
          <div className="relative h-[430px] overflow-hidden rounded-[2rem] md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTestimonial.destination}
                src={activeTestimonial.destination}
                alt={activeTestimonial.trip}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.65 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#10242D]/55 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white md:bottom-10 md:left-10">
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-white/75">
                THEIR DESTINATION
              </p>
              <h3 className="text-3xl font-semibold md:text-5xl">
                {activeTestimonial.trip}
              </h3>
            </div>

            <div className="absolute right-6 top-6 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl">
              Traveler story
            </div>
          </div>

          {/* Review panel */}
          <div className="relative z-10 lg:-ml-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2rem] border border-white/90 bg-white/65 p-7 shadow-[0_25px_80px_rgba(23,43,58,0.10)] backdrop-blur-2xl md:p-11"
              >
                <Quote
                  size={55}
                  strokeWidth={1.2}
                  className="mb-8 text-[#238A83]"
                />

                <div className="mb-7 flex gap-1">
                  {Array.from(
                    { length: activeTestimonial.rating },
                    (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className="fill-[#E9B95D] text-[#E9B95D]"
                      />
                    )
                  )}
                </div>

                <p className="text-2xl font-medium leading-relaxed tracking-tight text-[#172B3A] md:text-3xl">
                  “{activeTestimonial.review}”
                </p>

                <div className="my-9 h-px bg-[#E9E1D3]" />

                <div className="flex items-center gap-4">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="h-14 w-14 rounded-full object-cover ring-4 ring-[#A8E3D9]/40"
                  />

                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-[#172B3A]">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-sm text-[#718087]">
                      {activeTestimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider controls */}
            <div className="mt-7 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-[#238A83]"
                        : "w-2 bg-[#B9C7C1] hover:bg-[#238A83]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9E1DA] bg-white/70 text-[#172B3A] backdrop-blur-xl transition-all hover:bg-[#172B3A] hover:text-white"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#172B3A] text-white transition-all hover:bg-[#238A83]"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

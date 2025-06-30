"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import CarouselImage1 from "@/assets/carousel-1.webp";
import CarouselImage2 from "@/assets/carousel-2.webp";
import CarouselImage3 from "@/assets/carousel-3.webp";
import { MoveLeft, MoveRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: CarouselImage1,
    title: "We take",
    highlight: "Happiness",
    description:
      "Uniting Early Learning supports your child to learn and thrive...",
    button: "Get In Touch",
  },
  {
    id: 2,
    image: CarouselImage2,
    title: "Learning is",
    highlight: "Joyful",
    description: "We make learning fun and effective every day...",
    button: "Join Us Today",
  },
  {
    id: 3,
    image: CarouselImage3,
    title: "Support is",
    highlight: "Everywhere",
    description: "Our mentors guide every step of your child's journey...",
    button: "Meet Our Team",
  },
];

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasViewedFirstSlide, setHasViewedFirstSlide] = useState(false);
  const firstSlideRef = useRef(null);
  const firstSlideInView = useInView(firstSlideRef, { once: true });

  const goToSlide = (index: number) => {
    setSelectedIndex(index);
    if (index !== 0) setHasViewedFirstSlide(true);
  };

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % slides.length);
    setHasViewedFirstSlide(true);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setHasViewedFirstSlide(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-11rem)] overflow-hidden max-w-screen-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
          ref={selectedIndex === 0 ? firstSlideRef : null}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale:
                selectedIndex === 0 && firstSlideInView && !hasViewedFirstSlide
                  ? [2, 1]
                  : 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={slides[selectedIndex].image}
                alt={slides[selectedIndex].highlight}
                className="w-full h-full object-cover object-center"
                fill
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black/50 flex flex-col justify-center p-10 text-white"
            initial={{
              x: selectedIndex === 0 && !hasViewedFirstSlide ? -1200 : 0,
              opacity: selectedIndex === 0 && !hasViewedFirstSlide ? 0 : 1,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light">
              {slides[selectedIndex].title}{" "}
              <span className="text-orange-400 font-bold">
                {slides[selectedIndex].highlight}
              </span>{" "}
              seriously
            </h2>
            <p className="mt-4 max-w-lg text-lg">
              {slides[selectedIndex].description}
            </p>
            <button className="mt-6 px-5 py-2 rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition w-fit">
              {slides[selectedIndex].button}
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 right-24 flex flex-col gap-8 justify-center items-center ">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer group">
            <MoveLeft
              className="w-6 h-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300"
              onClick={prevSlide}
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer group">
            <MoveRight
              className="w-6 h-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300"
              onClick={nextSlide}
            />
          </div>
        </div>
        <div className="flex gap-2">
          {slides.map((_, idx) => {
            const isActive = selectedIndex === idx;
            return (
              <motion.div
                key={idx}
                className="rounded-full cursor-pointer bg-white/50"
                onClick={() => goToSlide(idx)}
                layout
                initial={false}
                animate={{
                  width: isActive ? 20 : 12, // active dot wider
                  scale: isActive ? 1.2 : 1, // active dot scaled up slightly
                  backgroundColor: isActive
                    ? "#f97316"
                    : "rgba(255,255,255,0.5)", // orange or semi-transparent white
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ height: 12 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

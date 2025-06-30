"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Target,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Supported Independent Living (SIL)",
    description:
      "Personalized assistance to help individuals maintain independence and comfort within their homes.",
    icon: Home,
    isActive: true,
  },
  {
    id: 2,
    title: "In-Home Support & Personal Care",
    description:
      "Empowering clients through career guidance, job placement, and skill-building programs.",
    icon: Users,
    isActive: false,
  },
  {
    id: 3,
    title: "S.T.A, and M.T.A",
    description:
      "Innovative projects that create community impact and provide opportunities for growth",
    icon: Target,
    isActive: false,
  },
];

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsExpanded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="my-24">
      <div className="max-w-screen-xl mx-auto p-8 bg-gray-50 rounded-[3rem]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-green-600">Service</span> We Provide
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                We provides personalized services, including home support,
                employment assistance, training, behavior support, social
                enterprise, and carers support, fostering independence, growth,
                and well-being.
              </p>
            </div>
            {/* Navigation */}

            <div className="flex justify-end items-end mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer group">
                  <MoveLeft
                    className="w-6 h-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300"
                    onClick={prevSlide}
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer group">
                  <MoveRight
                    className="w-6 h-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300"
                    onClick={nextSlide}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isExpanded
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="relative">
            {/* Slider Container */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {services.map((service, index) => (
                  <div key={service.id} className="w-1/3 flex-shrink-0 px-3 ">
                    <ServiceCard
                      service={service}
                      isActive={index === currentSlide}
                      index={index}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  isActive,
  index,
}: {
  service: any;
  isActive: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative h-[22rem] rounded-3xl overflow-hidden cursor-pointer group my-2 transition-all duration-700",
        isHovered && "shadow-[-8px_0px_14px_-4px_rgba(0,0,0,0.1)]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 group ${
          isHovered ? "bg-primary" : "bg-white"
        } transition-colors duration-700 ease-in-out`}
      />

      {/* Diagonal Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-red-600"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={
          isHovered && !isHovered
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
            : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <div
        className={cn(
          "absolute right-4 top-4 -rotate-45 transition-all duration-700",
          isHovered && "rotate-0"
        )}
      >
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <MoveRight className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="absolute -top-[25%] -left-[18%] w-0 h-0 group-hover:w-[16rem] group-hover:h-[16rem] rounded-full bg-white transition-all duration-500 ease-in-out" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-colors duration-300`}
          >
            <IconComponent
              className={`w-8 h-8 text-primary transition-colors duration-300`}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3
            className={`text-xl font-bold mb-4 ${
              isHovered || isHovered ? "text-white" : "text-gray-800"
            } transition-colors duration-300`}
          >
            {service.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isHovered || isHovered ? "text-white/90" : "text-gray-600"
            } transition-colors duration-300`}
          >
            {service.description}
          </p>
        </div>
      </div>

      {/* Border for inactive cards */}
      {!isHovered && (
        <div className="absolute inset-0 border border-gray-100 rounded-3xl pointer-events-none" />
      )}
    </motion.div>
  );
}

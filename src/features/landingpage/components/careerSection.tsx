"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const CareerSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: true });
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      imageControls.start({
        width: "50%",
        transition: {
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.1,
        },
      });
      // Then animate text in with a delay that matches image animation
      textControls.start({
        opacity: 1,
        x: 0,
        display: "block",
        transition: {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.4, // Start animating text halfway through image animation
        },
      });
    } else {
      imageControls.start({
        width: "100%",
        transition: {
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
        },
      });
      // Hide text first, then expand image
      textControls.start({
        opacity: 0,
        x: 50,
        display: "none",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, imageControls, textControls]);

  return (
    <div ref={containerRef} className="w-full ">
      <div className="w-full flex items-center justify-start px-2 overflow-hidden  relative max-w-screen-xl mx-auto h-[28rem]">
        <motion.div
          initial={{ width: "100%" }}
          animate={imageControls}
          className="overflow-hidden rounded-[3rem] shadow-lg relative w-full h-full shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome"
            fill
            className="object-cover rounded-[3rem"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, display: "none" }}
          animate={textControls}
          className="w-1/2 absolute right-0 top-1/3 -translate-y-1/3 pl-5"
        >
          <h2 className="text-4xl font-bold mb-4 text-green-800">
            Welcome To Matilda Care
          </h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            We are dedicated to empowering individuals and families by providing
            a range of supportive services tailored to enhance well-being and
            foster growth. Our mission is rooted in compassion, respect, and a
            commitment to meaningful, positive outcomes.
          </p>
          <button className="mt-2 px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-100 transition">
            Know More →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerSection;

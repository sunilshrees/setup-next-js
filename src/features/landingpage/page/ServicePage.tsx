"use client";

import { Button } from "@/components/ui/button";
import CurveLineBg from "@/assets/curve-line-bg.svg";
import FlowerBg from "@/assets/flower-bg.svg";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import WhoWeAre from "@/assets/who-we-are.webp";
import { cn } from "@/lib/utils";
import ContactUsPointer from "@/assets/contact-us-pointer.svg";
import { motion } from "framer-motion";
import SILicon from "@/assets/sil-icon.svg";
import STAIicon from "@/assets/sta-icon.svg";
import Clients from "@/assets/career.svg";
import { MoveRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Supported Independent Living (SIL)",
    description:
      "Personalized assistance to help individuals maintain independence and comfort within their homes.",
    icon: SILicon,
    isActive: true,
  },
  {
    id: 2,
    title: "In-Home Support & Personal Care",
    description:
      "Empowering clients through career guidance, job placement, and skill-building programs.",
    icon: Clients,
    isActive: false,
  },
  {
    id: 3,
    title: "S.T.A, and M.T.A",
    description:
      "Innovative projects that create community impact and provide opportunities for growth",
    icon: STAIicon,
    isActive: false,
  },
  {
    id: 1,
    title: "Supported Independent Living (SIL)",
    description:
      "Personalized assistance to help individuals maintain independence and comfort within their homes.",
    icon: SILicon,
    isActive: true,
  },
  {
    id: 2,
    title: "In-Home Support & Personal Care",
    description:
      "Empowering clients through career guidance, job placement, and skill-building programs.",
    icon: Clients,
    isActive: false,
  },
  {
    id: 3,
    title: "S.T.A, and M.T.A",
    description:
      "Innovative projects that create community impact and provide opportunities for growth",
    icon: STAIicon,
    isActive: false,
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-14 relative space-y-20">
        <div className="w-full flex flex-col justify-center items-center space-y-8 mb-12 relative">
          {/* background  */}
          <div className="absolute -top-[50%] w-full -z-10 opacity-15">
            <div className="w-full aspect-video overflow-hidden relative ">
              <Image src={CurveLineBg} alt="curve-line-bg" fill />
            </div>
          </div>
          <div className="absolute top-[60%] -left-[7%] w-52 z-10 opacity-15">
            <div className="w-full aspect-square overflow-hidden relative ">
              <Image src={FlowerBg} alt="flower-bg" fill />
            </div>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium ">
            <Link href="/" className="">
              Home
            </Link>
            <div>/</div>
            <span className="text-secondary">Services</span>
          </div>

          <h1 className="text-5xl font-medium text-primary">
            Your Path to <span className="font-semibold">Empowerment</span>
          </h1>
          <p className="text-center text-lg max-w-4xl text-[#707070]">
            Matilda Care Services offers NDIS-approved supports to enhance your
            independence, well-being, and community connection in Perth.
          </p>
          <Link href="/services">
            <Button
              className="text-secondary bg-transparent border-2 border-secondary rounded-xl px-8 py-3 h-auto font-normal text-xl hover:text-secondary"
              variant={"outline"}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="">
          <div className="w-full aspect-video max-h-[30rem] overflow-hidden relative rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Welcome"
              fill
              className="object-cover rounded-lg object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <div className="flex flex-col justify-center items-center w-full text-white space-y-2">
                <h1>Explore Our Services</h1>
                <Icon icon="iconamoon:mouse-thin" width="60" height="60" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-50 rounded-[3rem]">
          <div className="text-center mb-12">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h2 className="text-3xl  text-primary mb-4 font-normal">
                  <span className="text-primary font-bold">Our Services</span>
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                  Matilda Care Services provides a comprehensive range of
                  NDIS-funded supports designed to enhance independence,
                  well-being, and social inclusion.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="relative">
              {/* Slider Container */}
              <div className="relative overflow-hidden">
                <div className="grid grid-cols-2 transition-transform duration-500 ease-out">
                  {services.map((service, index) => (
                    <div key={service.id} className=" flex-shrink-0 px-3 ">
                      <ServiceCard service={service} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center pt-7">
          <div className="relative">
            <Image
              src={ContactUsPointer}
              alt="contact-us-pointer"
              width={150}
              height={38}
              className="absolute -top-[80%] -left-[30%]"
            />
            <Link href="/services">
              <Button
                className="text-secondary bg-transparent border-2 border-secondary rounded-xl px-8 py-3 h-auto font-normal text-xl hover:text-secondary"
                variant={"outline"}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServicePage;

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

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

      <div className="absolute -top-[25%] -left-[18%] w-0 h-0 group-hover:w-[17rem] group-hover:h-[17rem] rounded-full bg-white transition-all duration-500 ease-in-out" />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Icon */}
        <div className={cn("mb-8", index == 1 && "mb-2")}>
          <div
            className={cn(
              "w-32 h-32 flex items-center justify-center transition-colors duration-300 overflow-hidden relative",
              (index == 0 || index == 3) && "w-[7rem] h-[7rem]"
            )}
          >
            <Image src={service.icon} alt={service.title} fill />
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

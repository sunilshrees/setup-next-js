"use client";

import { Button } from "@/components/ui/button";
import CurveLineBg from "@/assets/curve-line-bg.svg";
import FlowerBg from "@/assets/flower-bg.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import WhoWeAre from "@/assets/who-we-are.webp";
import { cn } from "@/lib/utils";
import ContactUsPointer from "@/assets/contact-us-pointer.svg";

const values = [
  {
    title: "Empowerment",
    description:
      "Empowerment drives Matilda Care Services. We provide tools, support, and confidence for individuals with disabilities to live independently and thrive, focusing on personalized care, choice, and control.",
    icon: "✊",
    highlight: true,
  },
  {
    title: "Respect",
    description:
      "At Matilda Care Services, we respect everyone's uniqueness. We listen, value perspectives, and ensure individuals, families, and communities feel heard and dignified.",
    icon: "🫶",
  },
  {
    title: "Integrity",
    description:
      "Integrity drives Matilda Care Services. We act honestly and ethically, ensuring transparency and trust in all we do for our participants and community.",
    icon: "🧩",
  },
  {
    title: "Compassion",
    description:
      "Compassion defines our care at Matilda Care Services. With empathy and kindness, we connect personally, offering practical and emotional support to create a safe, nurturing environment.",
    icon: "❤️",
  },
  {
    title: "Safety",
    description:
      "Safety is key at Matilda Care Services. We ensure physical and emotional well-being with trained staff, secure accommodations, and strict standards, fostering a worry-free environment.",
    icon: "🛡️",
  },
  {
    title: "Inclusion",
    description:
      "At Matilda Care Services, inclusion means everyone belongs. We create welcoming environments, ensuring people with disabilities have equal opportunities and feel valued in community life.",
    icon: "🧑‍🤝‍🧑",
  },
];

const AboutPage = () => {
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
            <span className="text-secondary">About us</span>
          </div>

          <h1 className="text-5xl font-medium text-primary">
            Welcome to Matilda Care
          </h1>
          <p className="text-center text-base max-w-4xl text-[#393939]">
            We are dedicated to empowering individuals and families by providing
            a range of supportive services tailored to enhance well-being and
            foster growth. Our mission is rooted in compassion, respect, and a
            commitment to meaningful, positive outcomes
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

        <div className="rounded-[3rem] bg-[#F5F7F8] grid grid-cols-2 gap-12">
          <div className="space-y-2 p-[2rem]">
            <h2 className="font-semibold text-secondary flex items-center gap-2">
              Who We Are{" "}
              <Icon
                icon="heroicons:arrow-long-right-20-solid"
                width="30"
                height="30"
              />
            </h2>
            <h1 className="font-medium text-2xl text-primary">
              Empowering You to Live Your Way
            </h1>
            <p className="text-[#707070] font-medium">
              At Matilda Care Services, we go beyond simply providing
              services—we are passionate about empowering you. We don’t just
              support you; we are dedicated to helping you reach your full
              potential. Whether its in your home, in your community, or in your
              career, we are committed to ensuring that you have the right
              support and resources to live a fulfilled and independent life.{" "}
              <br />
              <br /> By choosing Matilda Care Services, you are choosing a
              provider that is truly invested in your goals, dreams, and
              well-being. We are here to provide you with the care, resources,
              and empowerment you need to lead the life you deserve.
            </p>
          </div>
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src={WhoWeAre}
              alt="Welcome"
              fill
              className="rounded-lg object-top object-cover"
              priority
            />
          </div>
        </div>
        <div className="rounded-[3rem] bg-[#F5F7F8] grid grid-cols-2 gap-2 min-h-[25rem]">
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Welcome"
              fill
              className="rounded-[3rem] object-top object-cover"
              priority
            />
          </div>
          <div className="space-y-2 px-[1rem] py-[4rem] flex justify-center flex-col items-start">
            <h2 className="font-semibold text-[#707070] flex items-center gap-2">
              Our Mission
            </h2>
            <h1 className="font-medium text-2xl text-primary">
              Empowering You to Live Your Way
            </h1>
            <p className="text-[#707070] font-medium">
              At Matilda Care Services, our mission is to empower individuals
              with disabilities through compassionate, personalized care. As an
              NDIS-approved provider, we focus on helping you achieve your
              goals, build confidence, and connect with your community—while
              living life on your terms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 rounded-[3rem]  border">
          {new Array(6).fill(0).map((_, index) => (
            <div
              className={cn(
                "space-y-2 px-[2rem] py-[2.5rem] border-b ",
                (index + 1) % 2 == 0 && "border-l"
              )}
              key={index}
            >
              <div className="flex items-center gap-2 divide-x-4 divide-gray-400">
                <Icon
                  icon="game-icons:life-support"
                  width="56"
                  height="56"
                  color="#ff9100"
                />
                <h2 className="font-medium text-lg text-[#707070] flex items-center gap-2 pl-2">
                  Comprehensive Support for All Needs
                </h2>
              </div>
              <p className="font-normal text-base text-[#393939]">
                Our mission is to provide holistic care that addresses both the
                physical and emotional needs of individuals. We offer a range of
                services from
              </p>
            </div>
          ))}
          <div className={cn("p-3 col-span-2 ")}>
            <div className="border border-primary space-y-2 px-[2rem] py-[2.5rem] rounded-[3rem]">
              <div className="flex items-center gap-2 divide-x-4 divide-gray-400">
                <Icon
                  icon="game-icons:life-support"
                  width="56"
                  height="56"
                  color="#ff9100"
                />
                <h2 className="font-medium text-lg text-primary flex items-center gap-2 pl-2">
                  Comprehensive Support for All Needs
                </h2>
              </div>
              <p className="font-normal text-base text-[#393939]">
                Our mission is to provide holistic care that addresses both the
                physical and emotional needs of individuals. We offer a range of
                services from
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 rounded-[3rem]  border">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={cn(
                "border-b p-8 flex flex-col items-center relative group overflow-hidden cursor-pointer",

                (idx == 1 || idx == 4) && "border-r border-l",
                (idx == 3 || idx == 4 || idx == 5) && "border-b-0",
                idx == 0 && "rounded-tl-[3rem]",
                idx == 2 && "rounded-tr-[3rem]",
                idx == 3 && "rounded-bl-[3rem]",
                idx == 5 && "rounded-br-[3rem]"
              )}
            >
              <div className="text-4xl mb-4 p-8 rounded-full relative">
                {value.icon}
                <div className="absolute inset-0 w-full h-full bg-[#FDDFB7] rounded-full -z-10 group-hover:scale-[10] transition-all duration-700 "></div>
              </div>
              <h3 className="text-2xl font-medium text-[#707070] group-hover:text-secondary transition-all duration-700 mb-2 ease-in-out">
                {value.title}
              </h3>
              <div className="h-[3px] w-12 bg-secondary mb-4 group-hover:w-16 transition-all duration-700"></div>
              <p className="text-[#393939] text-base text-center">
                {value.description}
              </p>
            </div>
          ))}
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

export default AboutPage;

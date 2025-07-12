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
import BenefitBg from "@/assets/benefit-pattern.webp";

const jobs = [
  {
    title: "Home Care Support Worker",
    location: "Sydney, NSW",
    type: "Full-time / Part-time",
    openings: 5,
    salary: "$28 - $32 per hour",
    responsibilities: [
      "Assist clients with daily living activities, personal care, and household tasks.",
      "Provide companionship and emotional support.",
      "Support mobility, transportation, and medication reminders.",
    ],
    qualifications: [
      "Previous experience in home care or a related field (preferred but not required).",
      "Compassionate, patient, and strong interpersonal skills.",
      "Ability to work independently and follow care plans.",
      "First Aid/CPR certification (preferred).",
    ],
  },
  {
    title: "Disability Support Worker",
    location: "Sydney, NSW",
    type: "Full-time / Part-time",
    openings: 5,
    salary: "$30 - $40 per hour",
    responsibilities: [
      "Offer specialized care for individuals with disabilities.",
      "Assist with therapy exercises, skill development, and community participation.",
      "Provide a safe and inclusive environment for clients.",
    ],
    qualifications: [
      "Experience working with individuals with disabilities (preferred).",
      "Strong communication and problem-solving skills.",
      "Relevant certifications or training in disability support (preferred).",
      "A positive and patient attitude.",
    ],
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-14 relative ">
        <div className="max-w-screen-xl mx-auto space-y-20 mb-20">
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
              <span className="text-secondary">Careers</span>
            </div>

            <h1 className="text-5xl font-medium text-primary">Careers</h1>
            <p className="text-center text-base max-w-4xl text-[#393939]">
              Join our team and make a difference in the lives of people with
              disabilities.
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
        </div>

        <div className="py-12 bg-[#F5F7F8]">
          <div className="max-w-screen-xl mx-auto ">
            <h1 className="text-2xl mb-4 font-bold text-primary text-center">
              Current Opening
            </h1>
            <div>
              <div className="grid md:grid-cols-2 gap-6 px-4">
                {jobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow border border-gray-200"
                  >
                    <h3 className="text-2xl font-normal text-primary mb-2">
                      {job.title}
                    </h3>
                    <ul className="text-sm text-gray-700 mb-4 space-y-1">
                      <li>
                        <strong>Number of Openings:</strong> {job.openings}
                      </li>
                      <li>
                        <strong>Location:</strong> {job.location}
                      </li>
                      <li>
                        <strong>Job Type:</strong> {job.type}
                      </li>
                      <li>
                        <strong>Salary:</strong> {job.salary}
                      </li>
                    </ul>

                    <div className="mb-3">
                      <p className="font-semibold text-gray-800 mb-1">
                        Responsibilities:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-1">
                        Qualifications:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.qualifications.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant={"outline"}
                      className="border-primary bg-transparent px-4 py-2 rounded-xl text-sm font-semibold transition"
                    >
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CareersPage;

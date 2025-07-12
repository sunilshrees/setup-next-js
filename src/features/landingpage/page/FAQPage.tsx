"use client";

import BenefitBg from "@/assets/benefit-pattern.webp";
import CurveLineBg from "@/assets/curve-line-bg.svg";
import FlowerBg from "@/assets/flower-bg.svg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Who can register on the platform?",
    answer:
      "Any registered incubator, accelerator, or startup support organization across India, public or private, can register, regardless of location or funding status.",
  },

  {
    question: "Is there any cost to register?",
    answer: "Organization listing is completely free.",
  },

  {
    question: "How does this platform support startup ecosystem building?",
    answer:
      "By bringing together incubators, accelerators, mentors, investors, and startups into one digital space, the platform enables collaboration, visibility, and real-world impact — especially in emerging startup regions.",
  },
  {
    question: "What industries or startup sectors does the platform focus on?",
    answer:
      "The platform is sector-agnostic. Incubators from all industries — such as DeepTech, HealthTech, AgriTech, FinTech, and EdTech are welcome.",
  },
];

const FAQpage = () => {
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
            <span className="text-secondary">FAQ</span>
          </div>

          <h1 className="text-5xl font-medium text-primary">
            Do you have any questions ?
          </h1>
          <p className="text-center text-base max-w-4xl text-[#393939]">
            We are here to help you.
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

        <div className="rounded-[2rem] overflow-hidden">
          <Accordion type="single" collapsible className="w-full items-start">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b px-6 py-4 rounded-md bg-[#FFF] gap-y-2 shadow-box"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 no-underline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 show_disc">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-[#F5F7F8] p-7 rounded-[3rem] relative border-2 border-primary default-box-shadow">
          <div className="absolute inset-0 w-full h-full ">
            <div className="relative overflow-hidden w-full h-full">
              <Image
                src={BenefitBg}
                alt="benefit"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="flex flex-col gap-8">
                <div>
                  <div className="text-3xl font-medium text-primary">
                    Get Disability Benefit from
                    <br />
                    <span className="font-semibold text-primary flex">
                      Matilda
                      <svg
                        className="w-8 h-8 ml-1 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                      >
                        <path
                          d="M24.8325 44.0507C18.9276 40.9732 14.5617 38.1705 11.1589 32.447C9.34163 29.3904 7.65833 26.2228 6.74116 22.759C5.40891 17.7276 5.95892 11.0324 10.9851 8.18932C17.2286 4.65763 25.9085 10.5892 24.2949 17.8275C24.2447 18.0525 23.6177 19.4282 23.9423 18.6654C25.6905 14.5568 30.8796 10.7687 34.9533 9.41558C41.3989 7.27452 45.931 10.7203 45.6864 17.5347C45.5097 22.4588 42.0926 28.2476 38.6819 31.6244C34.6594 35.6069 29.2526 37.9971 26.4149 43.0441"
                          fill="white"
                        />
                        <path
                          d="M24.8325 44.0507C18.9276 40.9732 14.5617 38.1705 11.1589 32.447C9.34163 29.3904 7.65833 26.2228 6.74116 22.759C5.40891 17.7276 5.95892 11.0324 10.9851 8.18932C17.2286 4.65763 25.9085 10.5892 24.2949 17.8275C24.2447 18.0525 23.6177 19.4282 23.9423 18.6654C25.6905 14.5568 30.8796 10.7687 34.9533 9.41558C41.3989 7.27452 45.931 10.7203 45.6864 17.5347C45.5097 22.4588 42.0926 28.2476 38.6819 31.6244C34.6594 35.6069 29.2526 37.9971 26.4149 43.0441"
                          stroke="#FF9100"
                          stroke-width="1.83638"
                          stroke-linecap="round"
                        />
                      </svg>
                      Care
                    </span>
                  </div>
                  <div className="text-base text-gray-500">
                    Schedule a call with us and we will get back to you
                  </div>
                </div>

                <div>
                  <button className="inline-flex items-center bg-white border-2 border-primary text-primary rounded-full px-6 py-2 hover:bg-primary hover:opacity-85 transition">
                    Schedule a callback
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-video h-[22rem] overflow-hidden rounded-[3rem] ">
              <Image
                src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lisa"
                fill
                className="rounded-[3rem] object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FAQpage;

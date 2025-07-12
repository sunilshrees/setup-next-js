"use client";

import CurveLineBg from "@/assets/curve-line-bg.svg";
import FlowerBg from "@/assets/flower-bg.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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

const NewsPage = () => {
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
            <span className="text-secondary">News & Articles</span>
          </div>

          <h1 className="text-5xl font-medium text-primary">News & Articles</h1>
          <p className="text-center text-base max-w-4xl text-[#393939]">
            Stay updated with the latest news and articles from Matilda Care
            Services.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-col mb-8">
            <h1 className="text-2xl mb-2 font-bold text-[#707070]">
              News and Insights
            </h1>
            <p className="text-[#393939]">
              Discover our latest story of empowerment and care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-t-[3rem] shadow-md overflow-hidden  border-2 border-transparent group hover:border-primary transition-all duration-300 cursor-pointer min-h-[29rem]">
              {/* Image Section with Badge */}
              <div className="relative w-full h-2/3 group-hover:h-[55%] transition-all duration-500 ease-in-out overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path or URL
                  alt="Lisa smiling in wheelchair"
                  fill
                  className="w-full object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                />
                <span className="absolute top-5 right-6 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-300 shadow-sm">
                  🌟 Just Uploaded
                </span>
              </div>

              {/* Content Section */}
              <div className="bg-white p-5 h-1/3 group-hover:h-[45%] transition-all duration-500 ease-in-out">
                <p className="text-sm text-gray-500 mb-1">April 5, 2025</p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                  Lisa’s Journey to Independence in Her New Home
                </h3>
                <p className="text-sm text-gray-600">
                  Lisa shares how Matilda Care’s NDIS-approved accommodation in
                  Perth gave her confidence and safety. With compassionate
                  support, she’s thriving in a space tailored to her goals.
                </p>
                <div className="underline underline-offset-8 font-semibold text-primary mt-4">
                  Read More
                </div>
              </div>
            </div>
            <div className="rounded-t-[3rem] shadow-md overflow-hidden  border-2 border-transparent group hover:border-primary transition-all duration-300 cursor-pointer min-h-[29rem]">
              {/* Image Section with Badge */}
              <div className="relative w-full h-2/3 group-hover:h-[55%] transition-all duration-500 ease-in-out overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path or URL
                  alt="Lisa smiling in wheelchair"
                  fill
                  className="w-full object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="bg-white p-5 h-1/3 group-hover:h-[45%] transition-all duration-500 ease-in-out">
                <p className="text-sm text-gray-500 mb-1">April 5, 2025</p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                  Lisa’s Journey to Independence in Her New Home
                </h3>
                <p className="text-sm text-gray-600">
                  Lisa shares how Matilda Care’s NDIS-approved accommodation in
                  Perth gave her confidence and safety. With compassionate
                  support, she’s thriving in a space tailored to her goals.
                </p>
                <div className="underline underline-offset-8 font-semibold text-primary mt-4">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl mb-4 font-bold text-[#707070]">
            By Categories
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant={"outline"}
              className="border-secondary text-secondary hover:text-secondary"
            >
              All
            </Button>
            <Button
              variant={"outline"}
              className="text-[#878787] hover:text-[#878787]"
            >
              NDIS Support
            </Button>
            <Button
              variant={"outline"}
              className="text-[#878787] hover:text-[#878787]"
            >
              Home support
            </Button>
            <Button
              variant={"outline"}
              className="text-[#878787] hover:text-[#878787]"
            >
              Nursing help
            </Button>
            <Button
              variant={"outline"}
              className="text-[#878787] hover:text-[#878787]"
            >
              Trends & Innovations
            </Button>
            <Button
              variant={"outline"}
              className="text-[#878787] hover:text-[#878787]"
            >
              Success Storiess
            </Button>
          </div>
          <p className="text-[#393939] mb-8">
            Discover our latest story of empowerment and care.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-t-[3rem] shadow-md overflow-hidden  border-2 border-transparent group hover:border-primary transition-all duration-300 cursor-pointer min-h-[29rem]">
              {/* Image Section with Badge */}
              <div className="relative w-full h-2/3 group-hover:h-[55%] transition-all duration-500 ease-in-out overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path or URL
                  alt="Lisa smiling in wheelchair"
                  fill
                  className="w-full object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="bg-white p-5 h-1/3 group-hover:h-[45%] transition-all duration-500 ease-in-out">
                <p className="text-sm text-gray-500 mb-1">April 5, 2025</p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                  Lisa’s Journey to Independence in Her New Home
                </h3>
                <p className="text-sm text-gray-600">
                  Lisa shares how Matilda Care’s NDIS-approved accommodation in
                  Perth gave her confidence and safety. With compassionate
                  support, she’s thriving in a space tailored to her goals.
                </p>
                <div className="underline underline-offset-8 font-semibold text-primary mt-4">
                  Read More
                </div>
              </div>
            </div>

            <div className="grid gap-8  w-full h-full">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 bg-white rounded-t-[3rem] shadow-sm group hover:border-primary transition-all duration-300 cursor-pointer border-2 border-transparent"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-tl-[3rem] ">
                    <Image
                      src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Lisa"
                      fill
                      className="rounded-tl-[3rem] object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                    />
                  </div>

                  <div className="px-6 py-4 flex flex-col justify-between ">
                    <p className="text-xs text-gray-500 mb-1">April 5, 2025</p>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Lisa’s Journey to Independence in Her New
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Lisa shares how Matilda Care’s NDIS-approved accommodation
                      in Perth gave her
                    </p>
                    <div className="underline underline-offset-8 font-semibold text-primary mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      Read More
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#F5F7F8]  p-5 rounded-[3rem]">
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-2xl  text-primary mb-4 font-normal">
                <span className="text-primary font-bold">Frequently</span> Asked
                Questions
              </h2>
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <Accordion
                type="single"
                collapsible
                className="w-full items-start"
              >
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
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewsPage;

import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
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
      question:
        "What industries or startup sectors does the platform focus on?",
      answer:
        "The platform is sector-agnostic. Incubators from all industries — such as DeepTech, HealthTech, AgriTech, FinTech, and EdTech are welcome.",
    },
  ];

  return (
    <div className="pt-24">
      <div className="max-w-screen-xl mx-auto ">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden ">
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
      </div>
    </div>
  );
}

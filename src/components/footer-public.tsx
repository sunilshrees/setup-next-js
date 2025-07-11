import React from "react";
import footerIcon from "@/assets/footer-icon.svg";
import Image from "next/image";
import { Facebook, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import footerArrowIcon from "@/assets/footer-arrow-icon.svg";
import { Button } from "./ui/button";

const FooterPublic = () => {
  return (
    <>
      <div className="bg-[#F5F7F8]">
        <div className="max-w-screen-2xl mx-auto">
          {/* footer1 */}
          <div className="grid grid-cols-5 gap-5 py-12 place-content-end place-items-start">
            <div className="col-span-2 w-full pr-24">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-secondary text-white pl-4 pr-8 py-2 rounded-full font-semibold text-2xl relative">
                  Matilda Care
                  <Image
                    src={footerArrowIcon}
                    alt="footer-arrow-icon"
                    width={35}
                    height={35}
                    className="absolute -right-2 -top-1/3"
                  />
                </div>
              </div>
              <p className="text-sm text-[#707070] max-w-md mb-6">
                Matilda Care provides personalized services, including home
                support, employment assistance, training, behavior <br />{" "}
                support, social enterprise, and carers support, fostering
                independence, growth, and well-being.
              </p>
              <div className="space-y-2 mb-4">
                <h4 className="text-primary font-semibold text-xl">
                  Get in touch
                </h4>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 items-center">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium text-[#1A1A1A]">
                        Phone
                      </span>
                    </div>
                    <span className="text-base text-[#707070]">1234567890</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 items-center">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium text-[#1A1A1A]">
                        Email Address
                      </span>
                    </div>
                    <span className="text-base text-[#707070]">
                      support@matilda.com
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 items-center">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium text-[#1A1A1A]">
                        NDIS Provider Number
                      </span>{" "}
                    </div>
                    <span className="text-base text-[#707070]">
                      12346569890
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-full">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div className="p-2 bg-white rounded-full">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div className="p-2 bg-white rounded-full">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
            <div className="col-span-3 w-full ">
              <div className="w-full flex flex-col gap-12">
                <div className=" grid grid-cols-3 gap-5">
                  <div className="col-span-1">
                    <h3 className="text-primary text-xl font-semibold mb-2">
                      Services
                    </h3>
                    <ul className="space-y-1 text-sm text-[#707070]">
                      <li>&rsaquo; HOME SUPPORT</li>
                      <li>&rsaquo; EMPLOYMENT SUPPORT</li>
                      <li>&rsaquo; TRAINING PROGRAM</li>
                      <li>&rsaquo; BEHAVIOR SUPPORT</li>
                      <li>&rsaquo; SOCIAL ENTERPRISE INITIATIVES</li>
                      <li>&rsaquo; PARENTS + CAREER</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-primary text-xl font-semibold mb-2">
                      Quick Links
                    </h3>
                    <ul className="space-y-1 text-sm text-[#707070]">
                      <li>&rsaquo; ABOUT US</li>
                      <li>&rsaquo; CAREER</li>
                      <li>&rsaquo; CONTACT US</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-primary text-xl font-semibold mb-2">
                      Legal
                    </h3>
                    <ul className="space-y-1 text-sm text-[#707070]">
                      <li>&rsaquo; PRIVACY POLICY</li>
                      <li>&rsaquo; TERMS AND CONDITION</li>
                      <li>&rsaquo; SITE MAPS</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center text-xl gap-2">
                    <div className="flex items-center gap-1">
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="43"
                          viewBox="0 0 42 43"
                          fill="none"
                        >
                          <path
                            d="M19.25 5.99609L18.0905 6.40531C13.5777 7.99809 11.3212 8.79448 10.0356 10.6116C8.75 12.4287 8.75 14.8215 8.75 19.6072V23.8849C8.75 28.6707 8.75 31.0634 10.0356 32.8806C11.3212 34.6977 13.5777 35.4941 18.0905 37.0869L19.25 37.4961"
                            stroke="#FF9100"
                            stroke-width="3"
                            stroke-linecap="round"
                          />
                          <path
                            d="M36.75 21.7461H19.25M36.75 21.7461C36.75 20.5207 33.26 18.2313 32.375 17.3711M36.75 21.7461C36.75 22.9714 33.26 25.261 32.375 26.1211"
                            stroke="#FF9100"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="mr-2 text-3xl text-secondary font-semibold">
                        Login{" "}
                        <span className="font-normal text-[#707070]">
                          portal
                        </span>
                      </span>
                    </div>

                    <div className="relative inline-block group">
                      {/* Shadow Button */}
                      <Button
                        variant="outline"
                        className="rounded-[0.75rem] px-6 py-[0.875rem] !h-auto bg-primary-light font-semibold text-primary absolute -right-1 -bottom-1 z-0 pointer-events-none group-hover:bg-primary-light group-hover:text-white transition-all duration-500 text-lg"
                      >
                        Matilda Portal
                      </Button>

                      {/* Main Button */}
                      <Button
                        variant={"outline"}
                        className="relative  rounded-[0.75rem] px-6 py-[0.875rem] !h-auto bg-primary-light border border-primary font-semibold text-primary hover:bg-primary hover:text-white z-10 transition-all duration-500 text-lg"
                      >
                        Matilda Portal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer2 */}
          <div className="flex justify-center items-center text-center px-12 py-3 gap-2">
            <Image src={footerIcon} alt="footer-icon" width={36} height={36} />
            <span className="text-[#707070]">
              Matilda Care provides personalized services, including home
              support, employment assistance, training, behavior support, social
              enterprise,.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-primary-light">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center py-6 px-10 text-sm ">
            <div className="font-medium text-[#707070]  ">
              © 2025 All Rights Reserved |{" "}
              <span className="text-primary font-bold">Matilda Care</span>
            </div>
            <div className="font-medium text-[#707070]  ">
              Design & developed by{" "}
              <span className="text-primary">XYZ Company</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPublic;

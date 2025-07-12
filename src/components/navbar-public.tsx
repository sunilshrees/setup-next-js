import logo from "@/assets/logo.png";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarPublic = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className=" bg-primary-light">
        <div className="max-w-screen-2xl mx-auto ">
          <div className="h-20 px-10 flex items-center justify-between gap-12">
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

            <div className="border-2 border-primary flex-1 rounded-[0.75rem] overflow-hidden flex items-center gap-2 bg-white h-[60%]">
              <div className="p-2 bg-white text-primary">
                <Icon icon="mynaui:search" width="32" height="32" />
              </div>
              <input
                type="text"
                className="pr-4 py-4 w-full border-none ring-0 outline-none"
                placeholder="Search anything"
              />
            </div>

            <div className="flex items-center gap-4 font-semibold text-primary">
              <h1 className="flex items-center gap-2">
                English <ChevronDown className="w-4 h-4" />
              </h1>
              <h1 className="flex items-center gap-1">
                <Icon
                  icon="solar:accessibility-line-duotone"
                  width="24"
                  height="24"
                />
                Accessibility
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_4px_8px_rgba(0,0,0,0.06)]">
        <div className="max-w-screen-2xl mx-auto ">
          <div className="px-10 h-24 flex items-center justify-between">
            <Link href="/">
              <div className="w-36 aspect-video relative overflow-hidden">
                <Image src={logo} alt="logo" fill className="object-contain" />
              </div>
            </Link>
            <nav className="flex items-center gap-12 font-medium text-lg text-[#707070]">
              <Link href="/about-us">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="/accomodation">Accommodation</Link>
              <Link href="/news-and-articles">News & Articles</Link>
              <Link href="/careers">Work with us</Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative inline-block group">
                {/* Shadow Button */}
                <Button
                  variant="outline"
                  className="rounded-[0.75rem] px-6 py-3 !h-auto bg-primary-light font-semibold text-primary absolute -right-1 -bottom-1 z-0 pointer-events-none group-hover:bg-primary-light group-hover:text-white transition-all duration-500"
                >
                  Referral Form
                </Button>

                {/* Main Button */}
                <Button
                  variant={"outline"}
                  className="relative  rounded-[0.75rem] px-6 py-3 !h-auto bg-primary-light border border-primary font-semibold text-primary hover:bg-primary hover:text-white z-10 transition-all duration-500"
                >
                  Referral Form
                </Button>
              </div>
              <div className="relative inline-block group">
                {/* Shadow Button */}
                <Button
                  variant="outline"
                  className="rounded-[0.75rem] px-6 py-3 !h-auto bg-white border border-primary font-semibold text-primary absolute -right-1 -bottom-1 z-0 pointer-events-none group-hover:bg-primary-light group-hover:text-white transition-all duration-500"
                >
                  General Enquiry
                </Button>

                {/* Main Button */}
                <Button
                  variant="outline"
                  className="rounded-[0.75rem] px-6 py-3 !h-auto bg-white border border-primary font-semibold text-primary hover:bg-primary hover:text-white relative z-10 transition-all duration-500"
                >
                  General Enquiry
                </Button>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarPublic;

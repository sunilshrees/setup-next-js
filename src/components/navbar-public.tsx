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

const NavbarPublic = () => {
  return (
    <header className="w-full  ">
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

            <div className="border-2 border-primary flex-1 rounded-[0.75rem] overflow-hidden">
              <input type="text" className="p-4 w-full" />
            </div>

            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2">
                English <ChevronDown className="w-4 h-4" />
              </h1>
              <h1 className="flex items-center gap-2">Accessibility</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white">
        <div className="max-w-screen-2xl mx-auto ">
          <div className="px-10 h-24 flex items-center justify-between">
            <div className="w-36 aspect-video relative overflow-hidden">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button>Referral Form</Button>
              <Button>General Enquiry</Button>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarPublic;

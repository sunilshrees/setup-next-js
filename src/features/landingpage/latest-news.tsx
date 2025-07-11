import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LatestNewsSection() {
  return (
    <div className="bg-[#F5F7F8]">
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl  text-primary mb-4 font-normal">
              <span className="text-primary font-bold">Latest</span> News ,
              Articles
            </h2>
            <div>
              <button className="inline-flex items-center bg-white border-2 border-orange-400 text-orange-500 rounded-full px-6 py-2 hover:bg-orange-50 transition">
                Need NDIS Care <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
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
      </div>
    </div>
  );
}

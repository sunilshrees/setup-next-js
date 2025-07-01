import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <div className="bg-[#F5F7F8] mb-24">
      <div className="max-w-screen-2xl mx-auto relative py-6">
        <div className="flex justify-center items-center mb-7 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="120"
              viewBox="0 0 148 120"
              fill="none"
            >
              <g clip-path="url(#clip0_1959_4328)">
                <path
                  d="M43.526 110.175C43.7415 110.163 43.9557 110.152 44.1712 110.14C47.7256 101.839 51.2786 93.537 54.8493 85.1989C55.7047 85.1189 56.4489 85.0323 57.1931 84.9835C62.3173 84.6517 67.4374 84.2521 72.5656 84.0178C80.9365 83.6371 89.31 83.1861 97.6862 83.0873C112.107 82.9152 126.529 82.9924 140.95 82.9545C141.38 82.9531 141.808 82.8353 142.237 82.7717C142.237 82.131 142.298 81.6055 142.227 81.0962C141.696 77.2116 141.191 73.3215 140.58 69.4477C137.464 49.7063 136.587 29.8376 137.178 9.8849C137.195 9.30654 137.18 8.72684 137.18 8.10649C93.0691 4.35868 49.1558 4.13383 5.27096 8.33404C4.50233 34.8708 6.26597 61.1475 10.7801 87.4459C18.4189 86.9326 26.0753 86.4193 33.9487 85.8897C35.5618 90.0885 37.0693 94.0923 38.639 98.0717C40.2359 102.119 41.8952 106.142 43.526 110.175ZM58.3467 90.1874C57.0603 93.2173 55.8348 96.1348 54.5836 99.0402C52.5868 103.682 50.5873 108.321 48.5566 112.948C48.0727 114.05 47.525 115.135 46.9028 116.166C45.2693 118.87 42.756 118.895 41.0113 116.219C40.3132 115.148 39.6368 114.031 39.1637 112.85C36.7276 106.763 34.3526 100.653 31.9803 94.5406C31.6021 93.5668 31.3432 92.5455 30.9758 91.3752C28.8706 91.4714 26.844 91.5297 24.8241 91.6638C20.756 91.9306 16.6932 92.2746 12.6237 92.5116C11.2749 92.5902 9.89898 92.5414 8.55829 92.3721C6.57776 92.1243 5.97858 91.5256 5.6912 89.5115C4.77752 83.0927 3.95467 76.6603 3.03421 70.2428C0.445019 52.1904 -0.244972 34.0446 0.287779 15.8378C0.365048 13.202 0.558892 10.5608 0.865257 7.94124C1.23262 4.80157 2.23849 3.71799 5.36992 3.23444C8.1245 2.80779 10.9184 2.61546 13.6987 2.37707C37.5708 0.331821 61.4904 -0.300731 85.4384 0.127281C100.313 0.392758 115.159 1.29622 129.959 2.8349C132.958 3.14643 135.944 3.61642 138.917 4.12976C141.051 4.49953 141.406 4.91672 141.717 7.03782C141.925 8.44917 142.043 9.88355 142.083 11.3098C142.38 21.8665 142.573 32.426 142.948 42.9787C143.309 53.0979 144.879 63.0912 146.392 73.0872C146.786 75.6959 147.134 78.3141 147.412 80.9377C147.522 81.9752 147.537 83.0723 147.32 84.0841C146.983 85.6594 146.043 86.8188 144.296 87.022C141.898 87.301 139.502 87.7331 137.098 87.7886C126.155 88.0419 115.206 88.4442 104.265 88.3047C90.1234 88.1245 76.0427 88.9873 61.9567 89.9503C60.8302 90.0262 59.7023 90.098 58.3467 90.1874Z"
                  fill="#D5ED9F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1959_4328">
                  <rect
                    width="147.76"
                    height="119.193"
                    fill="white"
                    transform="translate(0.120117)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[1.75rem] font-medium text-primary ">
            Clients Success
            <span className="text-primary font-bold pl-1">Stories</span>
          </h2>
        </div>
        <div className="relative pb-10">
          <div className="w-24 h-full absolute left-0 bg-gradient-to-r from-[#F5F7F8] to-transparent z-10" />
          <div className="w-24 h-full absolute right-0 bg-gradient-to-r to-[#F5F7F8] from-transparent z-10" />
          <Marquee speed={60} gradient={false} pauseOnHover direction="right">
            <div className="flex gap-x-8 mx-4">
              {new Array(5).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="max-w-md mx-auto bg-white rounded-[3rem] flex relative border-r-4 border-b-4 border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-[#DEF4C6] w-1/4 rounded-l-[3rem] flex items-center justify-center relative">
                    {/* <img
                  className="w-20 h-20 rounded-full border-4 border-white"
                  src="https://via.placeholder.com/150"
                  alt="Mia Kenric"
                /> */}

                    <div className="absolute top-1/2 -translate-y-1/2 -right-[35%]">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ">
                        <Image
                          src="https://images.unsplash.com/photo-1749288752527-831860baa9f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Lisa"
                          fill
                          className="w-full h-full object-cover group-hover:scale-150 transition-all duration-500 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-3/4 px-12 py-12 flex flex-col justify-between">
                    <div className="relative">
                      <div className="text-primary text-3xl leading-tight absolute -top-2 -left-8">
                        <Icon
                          icon="mingcute:quote-left-fill"
                          width="30"
                          height="30"
                        />
                      </div>
                      <p className="text-gray-700 text-sm">
                        &quot; Working with Matilda Care has been life-changing
                        for our family. Their dedicated team provided
                        personalized support that truly understood our needs,
                        &quot;
                      </p>
                      <div className="text-primary text-3xl text-right absolute -top-2 -right-8">
                        <Icon
                          icon="mingcute:quote-right-fill"
                          width="30"
                          height="30"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900">Mia Kenric</p>
                      <p className="text-sm text-gray-600">Participant</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

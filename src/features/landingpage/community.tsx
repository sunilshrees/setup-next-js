"use client";
import CareerSection from "./components/careerSection";
import CommunitySection from "./components/communitySection";

const CareerAndCommunitySection = () => {
  return (
    <div className="bg-[#F5F5F5] p-24 space-y-8">
      <CommunitySection />
      <CareerSection />
    </div>
  );
};

export default CareerAndCommunitySection;

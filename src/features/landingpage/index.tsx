import React from "react";
import HeroSection from "./hero-section";
import WelcomeSection from "./welcome-section";
import CommunitySection from "./community";
import ServicesSlider from "./service-section";
import NDISProviderSection from "./NDISProvider";
import LatestNewsSection from "./latest-news";

const MainPage = () => {
  return (
    <div className="">
      <HeroSection />
      <WelcomeSection />
      <ServicesSlider />
      <CommunitySection />
      <NDISProviderSection />
      <LatestNewsSection />
    </div>
  );
};

export default MainPage;

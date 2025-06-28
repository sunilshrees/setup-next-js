import React from "react";
import HeroSection from "./hero-section";
import WelcomeSection from "./welcome-section";

const MainPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <HeroSection />
      <WelcomeSection />
    </div>
  );
};

export default MainPage;

import React from "react";
import { FeaturedCategories, HeroBanner } from "../components";

const LandingPage = () => {
  return (
    <div className="landingPage__container">
      {/* Banner */}
      <HeroBanner />
      {/* featuredCategories */}
      <FeaturedCategories />

      {/* featuredCategories */}
    </div>
  );
};

export default LandingPage;

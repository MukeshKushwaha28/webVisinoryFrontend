import React from "react";
import Hero from "../Hero";
import ServicesSection from "./ServicesSection";
import InteractiveCards from "./InteractiveCards";
import Marquee from "./Marquee";
import TeamCards from "./TeamCards";
import Footer from "./Footer";
import Hero2 from "./Hero2";
import Services from "./Services";

import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <Hero />

      <Marquee />
      <Hero2 />
      <ServicesSection />
      <InteractiveCards />

      <Marquee />

      <FAQ />
      <TeamCards />

      <Footer />
    </div>
  );
};

export default Home;

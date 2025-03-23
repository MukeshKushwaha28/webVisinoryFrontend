import React from "react";
import Hero from "../Hero";
import ServicesSection from "./ServicesSection";
import InteractiveCards from "./InteractiveCards";
import Marquee from "./Marquee";
import TeamCards from "./TeamCards";
import Footer from "./Footer";
import Hero2 from "./Hero2";
import Services from "./Services";
import HeroSection from "./Video";

import CustomCarousel from "./Produect";

import FAQ from "./FAQ";
import JobCarousel from "./JobCarousel";

const jobsData = {
  software: [
    {
      title: "The Future Trends In Agency Service Business",
      company: "Google",
      logo: "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/ConCho-Blog-img-03.jpg",
      salary: "$120K",
      profile: "August 4,2024",
      link: "/apply/google",
    },
    {
      title: "The Future Trends In Agency Service Business",
      company: "Meta",
      logo: "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Blog-1.jpg",
      salary: "$110K",
      profile: "August 4,2024",
      link: "/apply/meta",
    },

    {
      title: "The Future Trends In Agency Service Business",
      company: "Meta",
      logo: "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Blog-3.jpg",
      salary: "$110K",
      profile: "August 4,2024",
      link: "/apply/meta",
    },

    {
      title: "The Future Trends In Agency Service Business",
      company: "Meta",
      logo: "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Blog-1.jpg",
      salary: "$110K",
      profile: "August 4,2024",
      link: "/apply/meta",
    },

    {
      title: "The Future Trends In Agency Service Business",
      company: "Meta",
      logo: "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/Blog-1.jpg",
      salary: "$110K",
      profile: "August 4,2024",
      link: "/apply/meta",
    },
  ],
};

const Home = () => {
  return (
    <div>
      <Hero />

      <Marquee />
      <Hero2 />
      <ServicesSection />
      <InteractiveCards />

      <HeroSection />

      <JobCarousel
        jobs={jobsData?.software}
        title={"Software Development"}
        color={"blue"}
      />

      <Marquee />

      <FAQ />
      <TeamCards />

      <Footer />
    </div>
  );
};

export default Home;

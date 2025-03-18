"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tag: "ALL-IN-ONE SOLUTION",
      title: "A RESULT DRIVEN STRATEGY.",
      description:
        "Ved scelerisque dolor sed enim suscipit, non facilisis neque iaculis. Suspendisse a ex ultricies, molestie nulla id, mollis ipsum.",
      image:
        "https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/Slider-Image-1.png",
    },
    {
      tag: "MEASURABLE RESULTS",
      title: "MAXIMIZE YOUR ONLINE PROFIT.",
      description:
        "Suspendisse a ex ultricies, molestie nulla id, mollis ipsum. Ved scelerisque dolor sed enim suscipit, non facilisis neque iaculis.",
      image: "/hero2.jpg",
    },
    {
      tag: "BOOST YOUR SEARCH",
      title: "SEO OPTIMIZED & USER-FRIENDLY.",
      description:
        "Mollis ipsum ved scelerisque dolor sed enim suscipit, non facilisis neque iaculis. Suspendisse a ex ultricies, molestie nulla id.",
      image: "/hero3.jpg",
    },
  ];

  return (
    <div className="relative h-auto">
      <div className="absolute inset-0 background-overlay opacity-90"></div>
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pt-32 ">
          <div className="hidden md:block pl-16 ">
            <img
              src={slides[currentSlide].image}
              alt="Hero"
              className="rounded-lg shadow-xl w-[400px] mt-9"
            />
          </div>

          <div className=" pt-9">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-4">
              {slides[currentSlide].tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/80 mb-8">
              {slides[currentSlide].description}
            </p>
            <button className="flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              <FaPlay className="text-sm" />
              Watch Intro
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {slides.map((_, index) => {
          return (
            <>
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
                className={` cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-pink-600 w-8" : "bg-white/50  "
                }`}
              ></button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

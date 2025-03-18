"use client";
import { useState } from "react";
import Button from "../button/Button";

// SVG Icons
const icons = {
  heart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  location: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
  ),
  diamond: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M6 2L2 8l10 12L22 8l-4-6H6zm4.12 2h3.76L18.8 8h-13L10.12 4zM4 9l7 9.09L4 9zm8 10.9L5 9h14l-7 10.9zm1-1.8L20 9l-7 9.1z" />
    </svg>
  ),
  settings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M19.43 12.98l1.6-2.77-2.09-3.63-3.77.66a5.97 5.97 0 00-1.42-.82l-.57-3.72H9.28l-.57 3.72c-.5.2-.98.47-1.42.82l-3.77-.66-2.09 3.63 1.6 2.77a6.068 6.068 0 000 2.04l-1.6 2.77 2.09 3.63 3.77-.66c.44.35.92.62 1.42.82l.57 3.72h3.14l.57-3.72c.5-.2.98-.47 1.42-.82l3.77.66 2.09-3.63-1.6-2.77c.11-.66.11-1.38 0-2.04zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  ),
};

// Card Data
const cards = [
  {
    id: 0,
    title: "Flexible Services",
    description:
      "Fermentum augue aliquam at; aliquet ante massa sed. Dignissim pellentesque etiam hendrerit luctus.",
    icon: icons.heart,
  },
  {
    id: 1,
    title: "Local Expertise",
    description:
      "Fusce imperdiet curabitur facilisis consequat montes justo vitae suscipit. Efficitur sollicit udin qua.",
    icon: icons.location,
  },
  {
    id: 2,
    title: "Expert Execution",
    description:
      "Egestas facilisis mi malesuada ullamcorper pretium malesuada. Ipsum velit porta amet dui.",
    icon: icons.diamond,
  },
  {
    id: 3,
    title: "Optimization",
    description:
      "Augue potenti consequat nam lectus consequat ligula nulla volutpat. Habitasse feugiat habitant.",
    icon: icons.settings,
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First card is active by default

  return (
    <div className="container mx-auto items-center pt-24 pb-10">
      <div className=" flex flex-col justify-center items-center ">
        <Button text={"Advanced Technology"} />

        <h2 className="font-bold text-3xl text-black text-center pt-4 pb-10">
          Outstand{" "}
          <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            Cost Effective Digital
          </span>{" "}
          <br /> Aggency Solution
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative group p-6 w-[260px] h-[300px] rounded-xl cursor-pointer 
          transition-all duration-500 ease-in-out overflow-hidden bg-gray-100 text-black shadow-lg"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)} // Reset to first card when hover ends
          >
            {/* Background Gradient Animation */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-pink-500 to-indigo-600 transition-all duration-500
            ${
              activeIndex === index ? "top-0 opacity-100" : "top-full opacity-0"
            }
            `}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full transition-all duration-500">
              <div
                className={`transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.icon}
              </div>
              <h3
                className={`text-lg font-bold mt-4 transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm mt-2 transition-all duration-500 ${
                  activeIndex === index ? "text-white" : "text-black"
                }`}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

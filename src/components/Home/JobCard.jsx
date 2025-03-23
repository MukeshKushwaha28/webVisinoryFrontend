import React from "react";
import Link from "next/link";
const JobCard = ({ title, company, logo, salary, profile, link }) => {
  return (
    <div className="  p-5 w-full min-h-[320px] flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="relative group overflow-hidden rounded-2xl">
          <h4 className=" text-black text-left pb-4">{profile}</h4>
          <h2 className=" group cursor-pointer text-black text-2xl font-bold text-left pb-5 hover:text-red-400 ">
            {title}
          </h2>

          <div
            className="relative ] overflow-hidden rounded-2xl"
            style={{ perspective: "1000px" }}
          >
            <img
              src={logo}
              alt={company}
              className=" h-[80%] object-contain rounded-2xl transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-110  origin-center"
            />
            {/* Optional shine animation */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

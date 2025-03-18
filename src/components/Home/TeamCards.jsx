"use client";
import { useState } from "react";

const teamMembers = [
  {
    name: "Karen Davidson",
    role: "DIGITAL MARKETING",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/ConCho-Team-Imge-01.jpg",
    social: ["FB", "TW", "YT", "IN"],
  },
  {
    name: "Christopher Sahel",
    role: "PRODUCT DESIGNER",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/ConCho-Team-Imge-01.jpg",
    social: ["FB", "TW", "YT", "IN"],
  },
  {
    name: "Divina Wilson",
    role: "CREATIVE DESIGNER",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/ConCho-Team-Imge-01.jpg",
    social: ["FB", "TW", "YT", "IN"],
  },
  {
    name: "Simson Gabriel",
    role: "MARKETING MANAGER",
    image:
      "https://wdtconcho.wpengine.com/wp-content/uploads/2024/07/ConCho-Team-Imge-01.jpg",
    social: ["FB", "TW", "YT", "IN"],
  },
];

export default function TeamCards() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ member }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg p-4 w-64 transition-all duration-300 hover:shadow-2xl overflow-hidden ${
        hover ? "pt-10" : "pt-6"
      }`} // Increased padding-top on hover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image + Text Wrapper - Moves Up on Hover */}
      <div
        className={`transition-all duration-500 ${
          hover ? "-translate-y-6" : ""
        }`} // Adjusted the movement upwards slightly
      >
        {/* Image */}
        <div
          className={`overflow-hidden rounded-xl transition-all duration-500 ${
            hover ? "h-35" : "h-55"
          }`} // Reduced height on hover
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-xl transition-all duration-500"
          />
        </div>

        {/* Name & Role */}
        <div className="text-center mt-2">
          {" "}
          {/* Reduced margin-top */}
          <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>
      </div>

      {/* Social Media Icons (Hidden Until Hover) */}
      <div
        className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-500 ${
          hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex gap-2">
          {member.social.map((platform, index) => (
            <div
              key={index}
              className=" cursor-pointer w-10 h-10 flex items-center justify-center text-black  rounded-lg relative overflow-hidden bg-gray-300 transition-all duration-500"
            >
              <span className="relative z-10">{platform}</span>

              {/* Gradient Effect from Bottom to Top */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-600 to-pink-600 opacity-0 
              bottom-[-100%] hover:bottom-0 hover:opacity-100 transition-all duration-500 ease-in-out"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

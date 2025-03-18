"use client";
import Marquee from "react-fast-marquee";

export default function CustomMarquee() {
  return (
    <div className=" pt-20 ">
      <div className="w-full bg-gradient-to-r pt-6 pb-6 from-pink-500 via-purple-600 to-blue-500 py-3 ">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {[
            "#SOCIAL MEDIA",
            "#CONTENT MARKETING",
            "#CREATIVE SERVICES",
            "#MARKETING",
          ].map((text, index) => (
            <span
              key={index}
              className="text-white font-semibold text-4xl uppercase tracking-widest mx-6"
            >
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

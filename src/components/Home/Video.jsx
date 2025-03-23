import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://wdtconcho.wpengine.com/wp-content/uploads/2024/08/Concho-Video-Bg-05.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-xl">
          DIGITAL-FRIENDLY STRATEGIC SOLUTIONS FOR MODERN WORLD
        </h1>
        <button className="mt-6 px-6 py-3 relative overflow-hidden rounded-full bg-white font-semibold text-black hover:text-white group">
          <span className="relative z-10">All Services</span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-transform duration-500 transform -translate-x-full text-white group-hover:translate-x-0"></span>
        </button>
      </div>

      {/* Right Sidebar Buttons */}
    </div>
  );
}

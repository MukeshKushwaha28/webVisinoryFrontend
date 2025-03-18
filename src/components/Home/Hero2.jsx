import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-4 md:px-8 mt-10">
      <div className="absolute top-0 right-0 grid grid-cols-4 gap-2 opacity-10">
        {[...Array(32)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-500 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="bg-gray-800 text-sm px-4 py-2 rounded-full">
            WE ARE TO ENHANCE YOUR PRESENCE
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Utilize Cutting-Edge Digital Technologies To Transform Your Brand.
            </h1>
            <p className="text-gray-400 mb-8">
              "Donec molestie lacus vel massa malesuada, vitae accumsan nunc
              malesuada. Donec sed convallis nibh. Vivamus interdum pulvinar
              sem. Praesent viverra et metus. Nullam bibendum molestie velit,
              non sodales orci condimentum."
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p className="text-gray-400">YEAR OF SERVICE</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">250+</h3>
                <p className="text-gray-400">COMPLETED PROJECTS</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">58</h3>
                <p className="text-gray-400">GLOBAL PARTNERS</p>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Explore More
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Digital Transformation"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

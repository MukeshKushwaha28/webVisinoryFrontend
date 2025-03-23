"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // Hide default arrows
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const images = [
    "https://via.placeholder.com/300x200?text=1",
    "https://via.placeholder.com/300x200?text=2",
    "https://via.placeholder.com/300x200?text=3",
    "https://via.placeholder.com/300x200?text=4",
    "https://via.placeholder.com/300x200?text=5",
  ];

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        style={{ position: "absolute", left: 0, top: "40%", zIndex: 1 }}
      >
        ⬅️
      </button>

      <Slider ref={sliderRef} {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`slide-${idx}`} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current.slickNext()}
        style={{ position: "absolute", right: 0, top: "40%", zIndex: 1 }}
      >
        ➡️
      </button>
    </div>
  );
};

export default CustomCarousel;

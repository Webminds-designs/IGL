import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// Import images
import heroImage from "../assets/hero.jpg";
import heroImage2 from "../assets/hero2.jpg";
import heroImage3 from "../assets/hero3.jpg";
import heroImage4 from "../assets/hero4.jpg";
import heroImage5 from "../assets/hero5.jpg";

// Array of images and corresponding text
const images = [
  { src: heroImage, location: "Singapore" },
  { src: heroImage2, location: "USA" },
  { src: heroImage3, location: "Canada" },
  { src: heroImage4, location: "UK" },
  { src: heroImage5, location: "Australia" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Preload images on component mount
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  // Cycle through images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, i) => (
          <motion.div
            key={image.src}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
            initial={{ opacity: i === index ? 1 : 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 md:p-8 lg:p-12">
        {/* Subtitle */}
        <span className="text-lg md:text-xl lg:text-2xl">START YOUR</span>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 md:mt-4">
          Next Chapter
        </h1>

        {/* Bottom Left Text */}
        <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 text-sm sm:text-base md:text-lg lg:text-xl text-left">
          Expand Your Horizons With Top Universities
          <br />
          And Global Career Prospects.
        </p>

        {/* Bottom Right Text with Smooth Fade */}
        <motion.span
          key={images[index].location}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          {images[index].location}
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;

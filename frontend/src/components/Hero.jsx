import React from 'react';
import heroImage from '../assets/hero.jpg';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Navbar */}
            <Navbar />

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

                {/* Bottom Right Text */}
                <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-right">
                    Singapore
                </span>
            </div>
        </div>
    );
};

export default HeroSection;
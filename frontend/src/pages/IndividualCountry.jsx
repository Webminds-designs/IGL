import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import goldengate from "../assets/GoldenGate.png";
import woxenUni from "../assets/WoxenUni.png";
import NEOMA from "../assets/NEOMA.png";
import AmsterCam from "../assets/AmsterCam.png";
import MiamiUni from "../assets/MiamiUni.png";
import DavisUni from "../assets/DavisUni.png";
import EduGCol from "../assets/EduGCol.png";
import UniversityCard from "../components/UniversityCard";

const IndividualCountry = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[300px] md:h-[60vh] lg:h-[70vh]">
          <img
            src={goldengate}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start pb-6 md:pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="text-2xl sm:text-3xl md:text-[64px] lg:text-[64px] xl:text-[64px] font-medium text-white text-left leading-tight md:leading-normal">
              Study in USA – Your Pathway to
              <br className="hidden md:block" />
              Global Education Starts Here
            </h1>
          </div>
        </div>

        {/* Featured Universities Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                Featured Universities
              </h3>
            </div>
            <h2 className="text-xl md:text-[36px] lg:text-[36px] text-gray-800 mb-8 md:mb-12">
              Discover Universities Partnered With IGL In USA
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <UniversityCard image={MiamiUni} name="Miami Regional University" />
              <UniversityCard image={DavisUni} name="Davis University" />
              <UniversityCard image={EduGCol} name="EduGlobal College" />
            </div>
          </div>
        </section>

        {/* Why Study Here Section */}
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-[16px] md:text-base uppercase tracking-wide ml-2 md:ml-3">
                WHY STUDY HERE
              </h3>
            </div>
            <p className="text-base md:text-lg lg:text-[36px] text-gray-800 mb-8 md:mb-12 leading-relaxed">
              The USA Is A Top Destination For Students Worldwide, Offering A{" "}
              <span className="text-[#787878]">
                World-Class Education System, Globally Recognized Degrees, And
                Diverse Career Opportunities. With Cutting-Edge Research, Strong
                Industry Connections{" "}
              </span>
              And A Focus On Innovation, U.S. Universities Provide Students With
              Real-World Experience. A Multicultural Environment And Flexible
              Academic Programs Make Studying In The USA Not Just An Education,
              But A Transformative Journey.
            </p>
          </div>
        </div>

        {/* Popular Universities Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                POPULAR AMONG STUDENTS
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl md:text-[36px] text-gray-800 mb-8 md:mb-12">
              Other Universities You May Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <UniversityCard image={woxenUni} name="Woxsen University" />
              <UniversityCard image={NEOMA} name="NEOMA Business School" />
              <UniversityCard image={AmsterCam} name="Amsterdam Campus" />
            </div>

            {/* Centered Explore More Button */}
            <div className="w-full flex justify-center mt-8 md:mt-12">
              <button
                className="text-black py-2 px-6 md:py-3 md:px-10 border-2 border-black rounded-3xl 
                hover:bg-black hover:text-white transition-all duration-300 text-base md:text-[16px]"
              >
                Explore More Universities
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualCountry;

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

const IndividualCountry = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
          <img
            src={goldengate}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start pb-4 md:pb-12 px-4 md:px-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-medium text-white text-left">
              Study in USA – Your Pathway to
              <br className="hidden lg:block" />
              Global Education Starts Here
            </h1>
          </div>
        </div>

        {/* Featured Universities Section */}
        <section className="py-10 md:py-10 lg:py-20 px-4 md:px-8 lg:px-24">
          <div className="mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                Featured Universities
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 md:mb-12">
              Discover Universities Partnered With IGL In USA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {[MiamiUni, DavisUni, EduGCol].map((uni, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="aspect-square mb-4">
                    <img
                      src={uni}
                      alt="University"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-center">
                    {['Miami Regional University', 'Davis University', 'EduGlobal College'][index]}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Study Here Section */}
        <div className="bg-white px-4 md:px-8 lg:px-24">
          <div className="max-w mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                WHY STUDY HERE
              </h3>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-12 md:mb-12">
              The USA Is A Top Destination For Students Worldwide, Offering A{' '}
              <span className="text-[#787878]">
                World-Class Education System, Globally Recognized Degrees, And
                Diverse Career Opportunities. With Cutting-Edge Research, Strong
                Industry Connections{' '}
              </span>
              And A Focus On Innovation, U.S. Universities Provide Students With
              Real-World Experience. A Multicultural Environment And Flexible
              Academic Programs Make Studying In The USA Not Just An Education,
              But A Transformative Journey.
            </p>
          </div>
        </div>

        {/* Popular Universities Section */}
        <section className="px-4 md:px-8 lg:px-24 mx-auto">
          <div className="lg:max-w mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                POPULAR AMONG STUDENTS
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 md:mb-12">
              Other Universities You May Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {[woxenUni, NEOMA, AmsterCam].map((uni, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="aspect-square mb-4">
                    <img
                      src={uni}
                      alt="University"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-center">
                    {['WOXEN University', 'NEOMA Business School', 'Amsterdam Campus'][index]}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Centered Explore More Button */}
            <div className="w-full flex justify-center mt-8 md:mt-8">
              <button className="text-black py-2 px-8 md:py-3 md:px-12 border-2 border-black rounded-3xl 
                hover:bg-black hover:text-white transition-all duration-300 text-lg md:text-xl mb-8">
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
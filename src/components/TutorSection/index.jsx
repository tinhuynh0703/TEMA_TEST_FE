import React from "react";
import { Decor8, Decor9, Person2 } from "../../assets";

const TutorSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 md:py-16 md:px-[50px] md:py-24 bg-white">
      {/* Left Section */}
      <div className="mt-0 md:mt-[80px]">
        <h2 className="text-[34px] md:text-[48px] w-full md:w-[460px] font-[500] text-center md:text-left md:font-[700] leading-[40.8px] md:leading-[57.6px] text-black mb-6">
          Get up and running fast together
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-[70px] md:mt-[98px]">
          <div className="pb-[48px] md:pb-0 pr-0 md:pr-[48px] flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-[#E4E4E4] ">
            <img src={Decor8} alt="" className="w-11 h-10" />
            <h3 className="text-[34px] font-[700] mt-[41px] md:mt-[61px]">
              University
            </h3>
            <p className="w-[224px] mt-[19px]">
              Browse hundreds of in-depth videos, courses, and guides to get up
              and running fast
            </p>
          </div>
          <div className="mt-[48px] md:mt-0 ml-0 flex flex-col items-center md:items-start md:ml-[61px]">
            <img src={Decor9} alt="" />
            <h3 className="text-[34px] font-[700] mt-[41px] md:mt-[61px]">
              Showcase
            </h3>
            <p className="w-[224px] mt-[19px] text-center md:text-left">
              Get inspired by the incredible websites built by members of the
              community
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Tutor Profile */}
      <div className="relative w-[300px] md:w-[522px] h-[300px] mt-[57px] md:mt-0 md:h-[491px]">
        {/* Black Background Box */}
        <div className="absolute top-0 w-full h-full bg-black rounded-lg"></div>

        {/* Yellow Foreground Box with Text & Image */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 w-[90%] h-[110%] bg-[#E8FF47] rounded-lg p-6 md:p-8">
          <h4 className="text-[23px] md:text-[34px] font-[700] opacity-30">
            TUTORS
          </h4>
          <h3 className="text-[32px] leading-[38.4px] md:leading-[57.6px] md:text-[48px] font-[700] opacity-30 max-w-[218px]">
            Anthoney Mills
          </h3>

          {/* Tutor Image */}
          <img
            src={Person2} // Replace with actual image path
            alt="Anthoney Mills"
            className="absolute bottom-0 right-0 w-[180px] md:w-[380px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TutorSection;

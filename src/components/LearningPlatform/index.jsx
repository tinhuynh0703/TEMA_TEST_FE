import React from "react";
import { Navbar } from "../Navbar";
import {
  ArrowUp,
  CodeCircle,
  Decor1,
  Decor2,
  Decor3,
  Person,
  RecordIcon,
} from "../../assets";
import CodeEditorUI from "../CodeEditorCard";

export const LearningPlatform = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 pb-20 md:pb-25 px-4 md:pr-[30px] md:pl-[50px]">
        <Navbar />

        <div className="text-[34px] md:text-[56px] font-[500] mt-10 md:mt-20 leading-[40.8px] md:leading-tight mb-8 md:mb-14 !font-['Source_Code_Pro'] max-w-[250px] md:max-w-[604px]">
          Improve your skills by{" "}
          <img src={CodeCircle} className="inline-block" alt="coding" /> study
          with coding
        </div>
        <div>
          <img src={Decor1} alt="" />
          <p className="!font-['Source_Code_Pro'] max-w-[281px] md:max-w-[375px] text-xs md:text-base">
            Create, launch, and iterate on new marketing campaigns without
            distracting your product team.
          </p>
        </div>

        <button className="bg-black text-white mt-8 md:mt-[111px] px-4 md:px-6 py-2 md:py-3 rounded-[2px] flex items-center space-x-4 hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="text-lg md:text-[22px] font-[500]">Get started</span>
          <img src={ArrowUp} alt="" />
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative bg-[#010101] md:mt-0 min-h-[400px] md:min-h-0">
        <img
          src={Person}
          className="absolute bottom-0 left-[220px] md:left-[156px] transform -translate-x-1/2 md:translate-x-0 z-30 w-[60%] md:w-auto"
          alt=""
        />
        <img
          src={Decor2}
          className="absolute top-16 md:top-[148px] right-0 w-auto h-auto max-w-[80%] md:max-w-none"
          alt=""
        />
        <div className="absolute z-10 top-40 md:top-100 left-[164px] md:left-[-125px] transform -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto">
          {/* Code Editor Card */}
          <CodeEditorUI />
        </div>
        <div className="absolute bottom-0 w-[60%] md:w-auto flex items-center gap-4 py-3 md:py-[18px] px-4 md:pl-[65px] md:pr-[191px] bg-[#01010150] backdrop-blur-[15px] z-30">
          <img src={RecordIcon} alt="" className="w-4 md:w-auto" />
          <span className="text-white font-[250] text-xs md:text-base">
            · Name (Skill)
          </span>
        </div>
        <img
          src={Decor3}
          className="absolute bottom-[-70px] md:bottom-[-80px] right-8 md:right-20 z-30 w-[150px] md:w-auto"
          alt=""
        />
      </div>
    </div>
  );
};

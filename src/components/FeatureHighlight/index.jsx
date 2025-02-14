import CodeEditorUI from "../CodeEditorCard";
import { Decor3 } from "../../assets";

export const FeatureHighlight = () => {
  return (
    <div className="px-6 py-[30px] md:py-20 md:p-20 bg-white flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Code Editor */}
      <div className="relative w-full order-2 md:order-1 mt-20 md:mt-0">
        <CodeEditorUI bgToolbar="black" hasSkeleton />

        {/* Yellow Triangle Graphic */}
        <img
          src={Decor3}
          alt="Triangle Icon"
          className="w-[120px] md:w-auto absolute rotate-30 right-0 md:right-[-26px] bottom-[-60px] md:bottom-10"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="max-w-lg md:ml-10 order-1 md:order-2">
        <h2 className="text-[34px] md:text-[48px] font-[500] md:font-bold leading-tight">
          The language for <br />
          building web pages
        </h2>
        <p className="mt-[21px] md:mt-9 text-base md:text-[22px] leading-[26.2px] font-[200] md:font-[250]">
          Go live on a fast, reliable, and hassle-free hosting network that
          scales with your business with one click and go code!
        </p>
        {/* Button */}
        <button className="bg-black text-[#DDF247] md:text-white mt-[32px] w-full md:w-auto md:mt-[48px] px-4 md:px-6 py-2 md:py-3 rounded-[2px] flex items-center space-x-4 hover:bg-gray-800 transition-colors cursor-pointer justify-center">
          <span className="text-lg md:text-[22px] font-[500]">
            Try it Yourself
          </span>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#DDF247] md:stroke-white transition-colors duration-300"
          >
            <path
              d="M32.25 12L13 31.25M32.25 12L20.75 11.75M32.25 12L32.5 22.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

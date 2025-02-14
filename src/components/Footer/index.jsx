import React from "react";
import {
  ArrowUp,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "../../assets";

const Footer = () => {
  return (
    <footer className="relative bg-[#010101] text-white py-12 px-6 md:px-[50px] text-center md:text-left">
      <div className="mx-auto mt-20 md:mt-60">
        {/* Promo Section */}
        <div className="absolute top-[-220px] w-[85%] left-1/2 transform -translate-x-1/2 bg-[#DDF247] shadow-[0px_21px_127px_22px_#DDF2474D] text-black rounded-[20px] py-7 md:py-[50px] px-7 md:px-[160px] text-center">
          <h2 className="text-2xl md:text-[56px] font-bold mb-2 font-['Source_Code_Pro'] leading-[28.91px] md:leading-[70.39px] tracking-tighter">
            Start upgrading your <br className="md:hidden" /> skills free for
            this month
          </h2>
          <p className="text-[14px] md:text-[34px] font-[250] mb-4 md:mb-8">
            Build your site for free and take as long as you need
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-[18px] md:gap-6">
            <button className="bg-[#01010140] text-white px-4 md:px-6 py-2 md:py-3 rounded-[2px] flex items-center justify-center space-x-4 hover:bg-gray-800 transition-colors cursor-pointer">
              <span className="text-[10px] md:text-[22px] font-[500]">
                Try Yourself
              </span>
            </button>
            <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-[2px] flex items-center justify-center space-x-4 hover:bg-gray-800 transition-colors cursor-pointer">
              <span className="text-[10px] md:text-[22px] font-[500]">
                Get started
              </span>
              <img className="w-5 md:w-auto" src={ArrowUp} alt="" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-[30px] border-b border-[#A3A3A3]">
          <div className="px-14 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center gap-5 text-lg font-semibold ">
              <span className="bg-[#DDF247] p-2 rounded-full">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3333 5.0935L0.439919 0.480162V1.8135L8.81325 5.76016L0.439919 9.68016V11.0402L10.3333 6.42683V5.0935Z"
                    fill="#010101"
                  />
                </svg>
              </span>
              <span className="text-[34px]">Macode</span>
            </div>
            <nav className="flex flex-col md:flex-row gap-10 md:gap-16 text-white font-[200] md:font-[250] text-[20px] md:text-[30px] mt-10 md:mt-0">
              <a href="#" className="hover:opacity-80">
                Tutorials
              </a>
              <a href="#" className="hover:opacity-80 order-3 md:order-2">
                Case Studies
              </a>
              <a href="#" className="hover:opacity-80 order-2 md:order-3">
                Resources
              </a>
            </nav>
          </div>
        </div>

        <div className="md:px-14 flex flex-col md:flex-row items-center justify-between">
          {/* Social Icons */}
          <div className="px-4 pb-6 md:pb-0 border-b md:border-none border-[#A3A3A3] md:px-0 w-full flex justify-between md:justify-start gap-4 text-gray-400 text-xl mt-6">
            <a href="#" className="hover:opacity-80">
              <img src={FacebookIcon} />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={InstagramIcon} />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={LinkedinIcon} />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={TwitterIcon} />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={MailIcon} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white flex-shrink-0 text-[22px] md:text-[24px] font-[200] mt-6">
            © 2021 Copyright.{" "}
            <span className="font-[250px] text-[#DDF247]">Macode.io</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

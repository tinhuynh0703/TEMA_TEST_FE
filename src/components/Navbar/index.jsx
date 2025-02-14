import { useState } from "react";
import { ArrowRight, UKFlag, VNFlag, MenuIcon } from "../../assets";
import Sidebar from "../Sidebar";

const LANGUAGES = [
  {
    code: "EN",
    name: "ENGLISH",
    flag: UKFlag,
  },
  {
    code: "VN",
    name: "VIỆT NAM",
    flag: VNFlag,
  },
];

export const Navbar = () => {
  const [isOpenDropdown, setIsOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="pt-5 md:pt-14 flex items-center justify-between relative">
      {/* Logo and Navigation Links */}
      <div className="flex items-center space-x-[10px] md:space-x-16">
        {/* Logo */}
        <img src={ArrowRight} className="p-3 bg-black rounded-full" alt="" />
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <div className="text-[22px] font-[250] cursor-pointer transition-opacity duration-300 hover:opacity-70">
            Tutorials
          </div>
          <div className="text-[22px] font-[250] cursor-pointer transition-opacity duration-300 hover:opacity-70 whitespace-nowrap">
            · <span className="pl-6">Case studies</span>
          </div>
          <div className="text-[22px] font-[250] cursor-pointer transition-opacity duration-300 hover:opacity-70 whitespace-nowrap">
            · <span className="pl-6">Resources</span>
          </div>
        </div>
        <span className="md:hidden font-[700] text-[20px]">macode.</span>
      </div>

      {/* Language Switcher */}
      <div className="relative md:ml-0 ml-20 pr-3 md:pr-0">
        <button
          className="flex items-center space-x-2 bg-[#E8E8E8] px-2 py-1 rounded-[12px] cursor-pointer"
          onClick={() => setIsOpen(!isOpenDropdown)}
        >
          <img src={language === "EN" ? UKFlag : VNFlag} alt="Flag" />
          <span className="font-[700]">{language}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isOpenDropdown ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpenDropdown && (
          <div className="absolute left-0 mt-2 bg-[#E8E8E8] w-[137px] rounded-[8px] z-10">
            <div className="p-2 flex flex-col gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className="flex items-center space-x-2 w-full p-1 rounded-md hover:bg-white cursor-pointer"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                >
                  <img src={lang.flag} alt={lang.name} />
                  <span className="whitespace-nowrap">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <img
        className="md:hidden"
        onClick={() => setOpenSidebar(true)}
        src={MenuIcon}
        alt=""
      />
      {openSidebar && (
        <Sidebar
          isOpen={openSidebar}
          toggleSidebar={() => setOpenSidebar(false)}
        />
      )}
    </nav>
  );
};

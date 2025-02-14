import {
  CaseStudyIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  ResourceIcon,
  TutorialIcon,
  TwitterIcon,
} from "../../assets";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`block md:hidden fixed top-0 right-0 w-80 h-full bg-[#000000DE] backdrop-blur-xs text-white transition-transform duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50 shadow-lg`}
    >
      <button
        className="absolute top-4 right-7 text-white font-[800] text-2xl"
        onClick={toggleSidebar}
      >
        ✕
      </button>
      <div className="pt-18 pb-6 flex flex-col h-full">
        <nav className="px-6">
          {[
            { icon: TutorialIcon, label: "Tutorials" },
            { icon: CaseStudyIcon, label: "Case Studies" },
            { icon: ResourceIcon, label: "Resources" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 flex items-center space-x-2"
            >
              <img src={item.icon} alt="" /> <span>{item.label}</span>
              <img src={ChevronRightIcon} className="ml-auto" alt="" />
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center justify-between mt-auto">
          {/* Social Icons */}
          <div className="px-[50px] py-6 border-t border-b border-[#A3A3A3] w-full flex justify-between gap-4 text-gray-400 text-xl">
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
          <div className="text-white flex-shrink-0 font-[200] mt-6">
            © 2021 Copyright. <span className="font-[250px]">Macode.io</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

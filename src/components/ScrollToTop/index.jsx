import { useEffect, useState } from "react";
import { ScrollToTopIcon } from "../../assets";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-gray-500 shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-500 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={ScrollToTopIcon} alt="" />
    </button>
  );
};

export default ScrollToTop;

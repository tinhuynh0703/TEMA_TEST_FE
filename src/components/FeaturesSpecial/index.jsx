import React, { useState, useRef } from "react";
import { Decor5, Decor6, Decor7 } from "../../assets";

const FeatureCard = ({ icon, title, description, isActive, onClick }) => (
  <div
    className={`p-8 rounded-[14px] transition-all duration-300 min-h-[250px] w-[317px] flex-shrink-0 
    ${isActive ? "bg-[#DDF247]" : "bg-white"}`}
    onClick={onClick}
  >
    <img
      className="mb-[70px] p-[22px] rounded-[10px] bg-white"
      src={icon}
      alt=""
    />
    <h3 className="text-[34px] font-[700] mb-[14px]">{title}</h3>
    <p className="max-w-[160px]">{description}</p>
  </div>
);

const FeaturesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const features = [
    {
      title: "Best Tutors",
      description: "Bring your design vision to life in clean, semantic HTML5",
      icon: Decor5,
    },
    {
      title: "Flexible",
      description: "Connect your marketing tools with built-in integrations",
      icon: Decor6,
    },
    {
      title: "Easy Access",
      description: "Connect your marketing tools with built-in integrations",
      icon: Decor7,
    },
  ];

  // Start drag event
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  // Drag event
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Stop drag event
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="pt-2 md:pt-30 pb-[56px] pr-4 md:pr-0 pl-4 md:pl-[50px]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mb-0 w-full md:w-[40%]">
          <h2 className="text-[34px] md:text-[48px] leading-[40.8px] md:leading-[57.6px] font-[500] md:font-[700] mb-[18px] md:mb-[46px] max-w-[242px] md:max-w-[400px]">
            Our Features Special For You
          </h2>
          <p className="text-[16px] md:text-[22px] mb-[22px] md:mb-[87px] font-[250] max-w-[200px] md:max-w-[256px]">
            We provide various special features for all of you
          </p>
          <div className="mt-8 gap-2 hidden md:flex">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 transition-all duration-300 cursor-pointer
                  ${
                    index === activeSlide
                      ? "w-[82px] bg-[#DDF247]"
                      : "w-[51px] bg-[#CFCFCF]"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Feature Cards */}
        <div
          ref={sliderRef}
          className="relative flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden scroll-smooth no-scrollbar snap-x cursor-grab active:cursor-grabbing w-full md:w-[60%] md:pr-[50px]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <div className="mt-16 gap-2 flex md:hidden">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 transition-all duration-300 cursor-pointer
                  ${
                    index === activeSlide
                      ? "w-[82px] bg-[#DDF247]"
                      : "w-[51px] bg-[#CFCFCF]"
                  }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlider;

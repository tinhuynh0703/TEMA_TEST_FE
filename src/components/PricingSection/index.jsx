import React from "react";
import { NewIcon } from "../../assets";

const PricingSection = () => {
  const packages = [
    {
      title: "DEVELOPMENT",
      price: "$10",
      features: ["1 Module Javascript", "1 Module Human Resources"],
      buttonText: "Buy Now",
      bgColor: "bg-[#F4F4F4]",
      textColor: "text-black",
      buttonStyle:
        "bg-white text-[#DDF247] hover:bg-[#E8FF47] hover:text-black",
    },
    {
      title: "IT & SOFTWARE",
      price: "$30",
      features: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
        "Pack Marketing Skills",
        "5 Module Study Case",
      ],
      buttonText: "Buy Now",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonStyle: "bg-[#DDF247] text-black hover:bg-[#d7e742]",
      isNew: true, // New label
    },
    {
      title: "BUSINESS",
      price: "$30",
      features: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
      ],
      buttonText: "Buy Now",
      bgColor: "bg-[#F4F4F4]",
      textColor: "text-black",
      buttonStyle:
        "bg-white text-[#DDF247] hover:bg-[#E8FF47] hover:text-black",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-[50px] text-center bg-white">
      {/* Section Header */}
      <h2 className="text-[34px] md:text-[48px] font-[700] mb-4 md:mb-8">
        Choose your package
      </h2>
      <p className="text-base md:text-[22px] font-[400] md:font-[250] mb-16">
        We provide various types of packages just for you
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`rounded-lg px-8 flex flex-col py-12 ${pkg.bgColor} ${
              pkg.textColor
            } shadow-lg transition transform hover:scale-105 ${
              pkg.isNew ? "relative" : ""
            }`}
          >
            {pkg.isNew && (
              <img
                src={NewIcon}
                className="absolute top-40 left-12 text-red-500 font-bold text-sm"
              />
            )}
            <h3 className="text-[21px] md:text-[24px] font-[400] my-6">
              {pkg.title}
            </h3>
            <p className="text-[42px] md:text-[48px] font-bold mb-6">
              {pkg.price}
            </p>
            <ul className="text-[19px] md:text-[22px] font-[250] space-y-1 mb-12 mt-10">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-[15px] px-4 text-[22px] rounded-[10px] transition-colors mt-auto cursor-pointer ${pkg.buttonStyle}`}
            >
              {pkg.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;

import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I Find the right information faster?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermentum.",
    },
    {
      question: "How to share feature demos and ideas?",
      answer:
        "Duis sodales, orci ut suscipit malesuada, sapien mauris laoreet quam, nec eleifend ligula sapien sit amet lorem.",
    },
    {
      question: "How to get insights from users?",
      answer:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vulputate nulla id magna feugiat, sed tincidunt felis blandit.",
    },
    {
      question: "Can I develop my website without code?",
      answer:
        "Maecenas fermentum ligula nec est tempor, sed facilisis nunc convallis. Morbi ut leo mi.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-0 md:pt-16 pb-80 px-6 md:px-[50px] text-center bg-white">
      <h2 className="text-[34px] md:text-[48px] font-bold mb-10 tracking-[0.25px]">
        FAQs
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 text-left cursor-pointer transition-all duration-500 ease-in-out transform"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-[21px] md:text-[34px] font-[500] md:font-[700] transition-colors duration-300">
                {`0${index + 1}. ${faq.question}`}
              </h3>
              <span
                className={`${
                  openIndex === index
                    ? "bg-[#DDF247]"
                    : "border-1 md:border-2 border-black text-[#DDF247] bg-white"
                } rounded-full w-[50px] h-[50px] md:w-[62px] md:h-[62px] text-center font-[900] py-1 md:py-3 text-2xl flex-shrink-0 transition-transform duration-300 transform  md:text-lg md:py-2`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                openIndex === index
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <p className="mt-2 md:mt-10 mb-6 text-[19px] md:text-base tracking-[0.25px] font-[250] md:font-[400] transition-opacity duration-300">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

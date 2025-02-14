import { CourseraLogo, EdxLogo, UdemyLogo } from "../../assets";

export const Sponsor = () => {
  return (
    <div className="px-6 py-20 md:p-20 flex justify-between items-center bg-white gap-10">
      <img
        src={EdxLogo}
        className="w-[50px] md:w-[200px] opacity-50 md:opacity-100 hover:opacity-80 cursor-pointer"
        alt=""
      />
      <img
        src={UdemyLogo}
        className="w-[82px] md:w-[334px] order-2 md:order-3 opacity-50 md:opacity-100 hover:opacity-80 cursor-pointer"
        alt=""
      />
      <img
        src={CourseraLogo}
        className="w-[82px] md:w-[334px] order-3 md:order-2 opacity-50 md:opacity-100 hover:opacity-80 cursor-pointer"
        alt=""
      />
    </div>
  );
};

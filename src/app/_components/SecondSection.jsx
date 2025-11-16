"use client";

import { FaArrowRightLong } from "react-icons/fa6";

const UpcomingData = [{
  Image: https://github.com/munkhuu0000/Movie/blob/main/public/SecondSection/DearSanta.png,
  Name: Dear Santa,
}];

export const SecondSection = () => {
  return (
    <div className="w-screen h-[978px] px-4 border border-red-500 px-20">
      <div className="w-100% h-[36px] flex justify-between">
        <p className="font-semibold">Upcoming</p>
        <div className="flex flex-row items-center gap-3">
          <p className="font-medium text-sm">See more</p>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="w-100% h-[910px] grid grid-rows-2 grid-cols-5 gap-8 border border-black">
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
        <div className="border border-black"></div>
      </div>
    </div>
  );
};

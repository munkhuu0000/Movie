"use client";

import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";

export const Header = () => {
  return (
    <div className="w-screen h-[59px] flex flex-row justify-around items-center px-4">
      <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
        <img src="header\film.png" className="h-5 w-5 " />
        <p className="text-base font-bold font-inter">Movie Z</p>
      </div>
      <div className="w-[488px] h-9 flex flex-row gap-2">
        <button className="w-[79px] h-9 border border-[#E4E4E7] rounded-md flex justify-center items-center gap-1">
          <FaChevronDown />
          Genre
        </button>
        <input
          className="w-[379px h-9 border border-[#E4E4E7] rounded-md px-2"
          placeholder="Search"
        />
      </div>
      <div className="w-9 h-9 border border-[#E4E4E7] rounded-full flex justify-center items-center">
        <LuMoon className="w-4 h-4" />
      </div>
    </div>
  );
};

{
  /* <IoIosSearch />; */
}

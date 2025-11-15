"use client";

import { FaChevronDown } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { CardCarousel } from "./CardCarousel";

export const FirstSection = () => {
  return (
    <div
      className="w-screen h-[680px] flex flex-row justify-around px-[0] border border-green-500 overflow:hidden pt-[0px] items-end
    "
    >
      <CardCarousel />
    </div>
  );
};

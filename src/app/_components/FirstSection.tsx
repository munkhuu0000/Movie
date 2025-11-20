"use client";

import { FaChevronDown } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { CardCarousel } from "./CardCarousel";
import { CarouselPlugin } from "./CarouselPlugin";

export const FirstSection = () => {
  return (
    <div
      className="w-[1440px] h-[600px] flex flex-row justify-around px-0 pt-0 items-end
    "
    >
      <CarouselPlugin />
    </div>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { FaStar } from "react-icons/fa6";
import { TfiControlPlay } from "react-icons/tfi";

const CardData = [
  {
    Id: nanoid,
    Name: "Wicked",
    Imdb: "7.4/10",
    Description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
];

export const CardCarousel = () => {
  return (
    <div className="w-fit h-[600px] flex flex-row justify-around items-center border border-red-500 px-0">
      <img
        src="firstSection/Wicked.jpg"
        className="w-[1440px] h-[600px] object-cover relative "
      />
      <div className="w-[404px] h-[264px] absolute left-[140px] top-[260px]">
        <p className="text-base text-[#FFFFFF] font-normal font-family: var(--font-inter);">
          Now playing:
        </p>
        <p className="text-[36px] text-[#FFFFFF] font-extrabold font-family: var(--font-inter);">
          {" "}
          Wicked
        </p>
        <div className="flex flex-row gap-1">
          <FaStar className="h-7 w-7 fill-[#FDE047]" />
          <p className="text-[18px] font-semibold text-[#FAFAFA]">
            7.4
            <span className="text-[16px] font-normal text-[#71717A]">/10</span>
          </p>
        </div>
        <div className="w-[302px] h-30 pt-4 ">
          <p className="text-[12px] font-normal text-[#FAFAFA]">
            {" "}
            "Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads. ",
          </p>
        </div>
        <Button className="bg-[#F4F4F5] text-[#18181B] self-end">
          <TfiControlPlay />
          Watch trailer
        </Button>
      </div>
    </div>
  );
};

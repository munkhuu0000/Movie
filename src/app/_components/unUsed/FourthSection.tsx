"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const PopularData = [
  {
    image: "/SecondSection/DearSanta.png",
    imdb: "6.4/10",
    name: "Dear Santa",
  },
  {
    image: "/SecondSection/HowToTrain.jpg",
    imdb: "7.8/10",
    name: "How To Train Your Dragon Live Action",
  },
  {
    image: "/SecondSection/Alien.jpg",
    imdb: "7.1/10",
    name: "Alien: Romulus",
  },
  {
    image: "/SecondSection/FromTheAshes.jpg",
    imdb: "5.1/10",
    name: "From the Ashes",
  },
  {
    image: "/SecondSection/SpaceDogs.jpg",
    imdb: "5.0/10",
    name: "Space Dogs",
  },
  {
    image: "/SecondSection/TheOrder.jpg",
    imdb: "6.8/10",
    name: "The Order",
  },
  {
    image: "/SecondSection/Y2K.jpg",
    imdb: "4.8/10",
    name: "Y2K",
  },
  {
    image: "/SecondSection/SoloLeveling.jpg",
    imdb: "8.7/10",
    name: "Solo Leveling: Reawakening",
  },
  {
    image: "/SecondSection/GetAway.jpg",
    imdb: "5.3/10",
    name: "Get Away",
  },
  {
    image: "/SecondSection/Sonic.png",
    imdb: "6.9/10",
    name: "Sonic the Hedgehog 3",
  },
];

export const FourthSection = () => {
  return (
    <div className="w-screen h-[978px] px-20">
      <div className="w-100% h-9 flex justify-between">
        <p className="font-semibold text-2xl">Top Rated</p>
        <div className="flex flex-row items-center gap-3">
          <p className="font-medium text-sm">See more</p>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="w-full h-[910px] grid grid-rows-2 grid-cols-5 gap-8 ">
        {PopularData.map((item, index) => {
          return (
            <div key={index} className="w-full h-[440px] bg-muted rounded-lg">
              <div className="w-full h-[340px] rounded-t-lg hover:bg-black hover:opacity-50 hover:duration-300 hover:ease-in-out z-2 ">
                <img
                  className="w-full h-[340px] rounded-t-lg z-10"
                  src={item.image}
                  alt="movie poster"
                />
              </div>
              <div className="w-full h-[100px] px-3">
                <div className="flex flex-row items-center gap-1">
                  <FaStar className="h-4 w-4 fill-[#FDE047]" />
                  <p>{item.imdb}</p>
                </div>
                <p className="text-lg font-normal">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

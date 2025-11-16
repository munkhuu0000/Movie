"use client";

import { FaArrowRightLong } from "react-icons/fa6";

const UpcomingData = [
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/main/public/SecondSection/DearSanta.png",
    imdb: "6.4/10",
    name: "Dear Santa",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/HowToTrain.jpg",
    imdb: "7.8/10",
    name: "How To Train Your Dragon",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/Alien.jpg",
    imdb: "7.1/10",
    name: "Alien: Romulus",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/main/public/SecondSection/FromTheAshes.jpg",
    imdb: "5.1/10",
    name: "From the Ashes",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/main/public/SecondSection/SpaceDogs.jpg",
    imdb: "5.0/10",
    name: "Space Dogs",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/TheOrder.jpg",
    imdb: "6.8/10",
    name: "The Order",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/Y2K.jpg",
    imdb: "4.8/10",
    name: "Y2K",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/SoloLeveling.jpg",
    imdb: "8.7/10",
    name: "Solo Leveling: Reawakening",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/GetAway.jpg",
    imdb: "5.3/10",
    name: "Get Away",
  },
  {
    image:
      "https://github.com/munkhuu0000/Movie/blob/89fd22a14629acf5e86dedadc3d564e75813fb01/public/SecondSection/Sonic.png",
    imdb: "6.9/10",
    name: "Sonic the Hedgehog 3",
  },
];

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
        {UpcomingData.map((item, index) => {
          return (
            <div className="w-[230px] h-[440px] border border-black bg-[#F4F4F5] rounded-lg">
              <img
                className="w-[230px] h-[340px] rounded-t-lg"
                key={index}
                src={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

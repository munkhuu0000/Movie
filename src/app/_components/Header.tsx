"use client";

import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { ModeToggle } from "./ModeToggle";

const GenreList = [
  { genre: "Action" },
  { genre: "Advnture" },
  { genre: "Animation" },
  { genre: "Biography" },
  { genre: "Comedy" },
  { genre: "Crime" },
  { genre: "Documentary" },
  { genre: "Drama" },
  { genre: "Family" },
  { genre: "Fantasy" },
  { genre: "Film-Noir" },
  { genre: "Game-Show" },
  { genre: "History" },
  { genre: "Horror" },
  { genre: "Music" },
  { genre: "Musical" },
  { genre: "Mystery" },
  { genre: "News" },
  { genre: "Reality-Show" },
  { genre: "Romance" },
  { genre: "Sci-fi" },
  { genre: "Short" },
  { genre: "Sport" },
  { genre: "Talk-Show" },
  { genre: "Thriller" },
  { genre: "War" },
  { genre: "Western" },
];

export const Header = () => {
  return (
    <div className="w-screen h-[59px] flex flex-row justify-around items-center px-4">
      <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
        <img src="header\film.png" className="h-5 w-5 " />
        <p className="text-base font-bold font-inter">Movie Z</p>
      </div>
      <div className="w-[488px] h-9 flex flex-row gap-2 relative">
        <div className="w-[79px] h-9 border border-[#E4E4E7] rounded-md flex justify-center items-center gap-1">
          <Popover>
            <PopoverTrigger className="flex flex-row items-center gap-1">
              <FaChevronDown />
              Genre
            </PopoverTrigger>
            <PopoverContent className="w-fit relative left-[43.5%]">
              <div className="w-[577px] h-[333px] rounded-lg p-5 flex flex-col top-10 bg-background">
                <div className="w-full h-fit flex flex-col py-2">
                  <p className="font-semibold text-2xl">Genres</p>
                  <p className="font-normal text-base">
                    See lists of movie by genre
                  </p>
                </div>
                <div className="w-full h-1 bg-[#E4E4E7] "></div>
                <div className="flex flex-wrap gap-1">
                  {GenreList.map((item, index) => {
                    return (
                      <Button key={index} variant="secondary">
                        {item.genre} <MdKeyboardArrowRight />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <input
          className="w-[379px h-9 border border-[#E4E4E7] rounded-md px-2"
          placeholder="Search"
        />
      </div>

      <ModeToggle />
    </div>
  );
};

{
  /* <IoIosSearch />; */
}

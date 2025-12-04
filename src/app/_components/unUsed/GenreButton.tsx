"use client";

import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { Button } from "@/components/ui/button"
import { MdKeyboardArrowRight } from "react-icons/md";


const GenreList = [
  {genre: "Action",}, 
  {genre: "Advnture",}, 
  {genre: "Animation",},
  {genre: "Biography",},
  {genre: "Comedy",},
  {genre: "Crime",},
  {genre: "Documentary",},
  {genre: "Drama",},
  {genre: "Family",},
  {genre: "Fantasy",},
  {genre: "Film-Noir",},
  {genre: "Game-Show",},
  {genre: "History",},
  {genre: "Horror",},
  {genre: "Music",},
  {genre: "Musical",},
  {genre: "Mystery",},
  {genre: "News",},
  {genre: "Reality-Show",},
  {genre: "Romance",},
  {genre: "Sci-fi",},
  {genre: "Short",},
  {genre: "Sport",},
  {genre: "Talk-Show",},
  {genre: "Thriller",},
  {genre: "War",},
  {genre: "Western",},

]

export const Header = () => {
  return (
        <div className="w-[577px] h-[333px] rounded-lg p-5 border-2 border-red-500 flex flex-col absolute z-10 top-10 bg-background">
           <div className="w-full h-fit flex flex-col py-2">
           <p className="font-semibold text-2xl">Genres</p>
            <p className="font-normal text-base">See lists of movie by genre</p>
          </div>
          <div className="w-full h-1 bg-[#E4E4E7] "></div>
          <div className="flex flex-wrap gap-1">
          {GenreList.map((item,index) =>{
            return( <Button variant="secondary">{item.genre} <MdKeyboardArrowRight />
            </Button>)
          })}
          </div>
        </div>
        
  );
};

{
  /* <IoIosSearch />; */
}

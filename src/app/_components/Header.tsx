"use client";

import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export type Genrelists = {
  id: number;
  name: string;
};
type GenreResponse = {
  genres: Genrelists[];
};

export const Header = () => {
  const [genreslist, setGenreslist] = useState<Genrelists[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const res = await fetch("https://api.themoviedb.org/3/genre/movie/list", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2ZTY3OWMzNmQ3MzMxNGJkYWJiNmY0MzA2NjRjOCIsIm5iZiI6MTc2MzUyMjg0Mi43ODgsInN1YiI6IjY5MWQzOTFhN2QwOTFjNzQxMzU3Y2Y1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsBHhf6bC6Y2ZqgPWinC5LgILDD4tqpuh6zO-CAwvIU",
          accept: "application/json",
        },
      });
      const data = (await res.json()) as GenreResponse;

      setGenreslist(data.genres);
    };
    GetData();
    setLoading(false);
  }, []);
  return (
    <div className="w-screen">
      {loading ? (
        <div className="flex flex-row justify-around items-center py-4">
          <Skeleton className="w-[92px] h-9 gap-2 " />
          <Skeleton className="w-[488px] h-9 " />
          <Skeleton className="w-9 h-9 " />
        </div>
      ) : (
        <div className="w-screen h-[59px] flex flex-row justify-around items-center px-4">
          <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
            <img src="/header/film.png" className="h-5 w-5 " />
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
                    <div className="w-full h-2 bg-[#E4E4E7] pb-5"></div>
                    <div className="flex flex-wrap gap-1">
                      {genreslist.map((item) => {
                        return (
                          <Button key={item?.id} variant="secondary">
                            {item.name} <MdKeyboardArrowRight />
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
      )}
    </div>
  );
};

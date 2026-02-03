"use client";

import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Genres } from "./Genres";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Header = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const GetData = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       `https://api.themoviedb.org/3//search/movie?query=${searchValue}&language=en-US&page=${}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2ZTY3OWMzNmQ3MzMxNGJkYWJiNmY0MzA2NjRjOCIsIm5iZiI6MTc2MzUyMjg0Mi43ODgsInN1YiI6IjY5MWQzOTFhN2QwOTFjNzQxMzU3Y2Y1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsBHhf6bC6Y2ZqgPWinC5LgILDD4tqpuh6zO-CAwvIU",
  //           accept: "application/json",
  //         },
  //       },
  //     );

  //     const data = (await res.json()) as Response;

  //     setMovies(data.results);
  //     setLoading(false);
  //   };

  //   GetData();
  // }, []);

  useEffect(() => {
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
          <Link href="/">
            <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
              <img src="/header/film.png" className="h-5 w-5 " />
              <p className="text-base font-bold font-inter">Movie Z</p>
            </div>
          </Link>
          <div className="w-[488px] h-9 flex flex-row gap-2">
            <Genres />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <input
                  className="w-75 h-9 border border-[#E4E4E7] rounded-md px-2"
                  placeholder="Search"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Title</PopoverTitle>
                  <PopoverDescription>
                    Description text here.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </div>
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

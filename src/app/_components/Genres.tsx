"use client";

import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type Genrelists = {
  id: number;
  name: string;
};
type GenreResponse = {
  genres: Genrelists[];
};

export const Genres = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  console.log(genreIds);
  const [genreslist, setGenreslist] = useState<Genrelists[]>([]);

  const handleClickGenre = (genreId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const updatedGenreIds = genreIds?.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    params.set("genreIds", updatedGenreIds.join(","));
    router.push(pathname + "?" + params);
  };

  useEffect(() => {
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
  }, []);
  return (
    <div className="w-[79px] h-9 border border-[#E4E4E7] rounded-md flex justify-center items-center gap-1">
      <Popover>
        <PopoverTrigger className="flex flex-row items-center gap-1">
          <FaChevronDown />
          Genre
        </PopoverTrigger>
        <PopoverContent className="w-fit relative left-[43.5%] top-3">
          <div className="w-[500px] h-[300px] rounded-lg p-2 flex flex-col top-10 bg-background gap-5">
            <div className="w-full h-fit flex flex-col py-2">
              <p className="font-semibold text-2xl">Genres</p>
              <p className="font-normal text-base">
                See lists of movie by genre
              </p>
            </div>
            <div className="w-full h-0.5 bg-[#E4E4E7]"></div>
            <div className="flex flex-wrap gap-4">
              {genreslist.map((item) => (
                <Button
                  key={item?.id}
                  variant={
                    genreIds.includes(item?.id.toString())
                      ? "default"
                      : "outline"
                  }
                  className="h-5 rounded-full text-[12px] font-semibold"
                  onClick={() => handleClickGenre(item?.id.toString())}
                >
                  {item.name} <MdKeyboardArrowRight />
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

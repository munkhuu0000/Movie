"use client";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./ModeToggle";
import { ChangeEvent, useEffect, useState } from "react";
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
import { Response } from "./MovieSection";
import { MovieSearchCard } from "./MovieSearchCard";

export const Header = () => {
  const [loading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            accept: "application/json",
          },
        },
      );
      const data = (await res.json()) as Response;

      setMovies(data.results);
      console.log("ss", data.results);
    };
    fetchMovies();
  }, [query]);


  console.log("movie", movies);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  return (
    <div className="w-screen">
      {loading ? (
        <div className="flex flex-row justify-around items-center py-4">
          <Skeleton className="w-[92px] h-9 gap-2 " />
          <Skeleton className="w-[488px] h-9 " />
          <Skeleton className="w-9 h-9 " />
        </div>
      ) : (
        <div className="w-screen h-[59px] flex flex-row justify-between items-center px-4">
          <Link href="/">
            <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
              <img src="/header/film.png" className="h-5 w-5 " alt="movie poster"/>
              <p className="text-base font-bold font-inter">Movie Z</p>
            </div>
          </Link>
          <div className="w-[488px] h-9 flex flex-row gap-2">
            <Genres />
            <Popover open={open && query.length > 0} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="relative w-full">
                  <Input
                    className="w-75 h-9 border border-[#E4E4E7] rounded-md px-2"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                    onFocus={() => query.length > 0 && setOpen(true)}
                  />
                </div>
              </PopoverTrigger>

              <PopoverContent
                className="w-[500px] max-h-[400px] overflow-y-auto flex flex-col bg-white dark:bg-zinc-950"
                onOpenAutoFocus={(e) => e.preventDefault()}
                align="start"
              >
                <div className="w-full">
                  {movies?.length === 0 ? (
                    <p className="p-4 text-center text-sm text-muted-foreground">
                      No results found.
                    </p>
                  ) : (
                    movies?.map((movie) => (
                      <MovieSearchCard
                        key={movie.id}
                        image={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}
                        title={movie.title}
                        rate={movie.vote_average}
                        date={movie.release_date}
                        id={movie.id}
                      />
                    ))
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

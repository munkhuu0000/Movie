"use client";

import { use, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { PaginationComponent } from "@/app/_components/Pagination";
import { Image } from "lucide-react";

type Movie = {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
const Category = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    console.log("render");
    const GetData = async () => {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            Authorization:
              `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            accept: "application/json",
          },
        },
      );

      const data = (await res.json()) as Response;
      console.log("datapage", data.results);
      setTotalPage(data?.total_pages);
      setMovies(data.results);
      setLoading(false);
    };

    GetData();
  }, [categoryName, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev + 1);
  };


  if (loading) {
    return (
      <div className="w-screen px-20 gap-15">
        <div className="flex flex-col gap-8">
          <div className="w-100% h-9 flex justify-between items-center">
            <Skeleton className="w-[250px] h-8 rounded-full"></Skeleton>
            <Skeleton className="w-[250px] h-8 rounded-full"></Skeleton>
          </div>

          <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center ">
            {[...Array(10)].map((_, i) => (
              <Skeleton key={i} className="w-full aspect-2/3 rounded-t-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-6 flex-col">
      <div className="w-screen px-20 gap-15">
        <div className="flex flex-col gap-8">
          <div className="w-100% flex justify-between items-center">
            <p className="font-semibold text-2xl">
              {categoryName
                .split("_")
                .map((item) => item[0].toUpperCase() + item.slice(1))
                .join(" ")}
            </p>
          </div>
          <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center ">
            {movies.map((movie) => (
              <Link
                href={`/movie/${movie?.id}`}
                key={movie.id}
                className="w-full bg-muted rounded-lg"
              >
                <div className="w-full aspect-2/3 rounded-t-lg hover:bg-black hover:opacity-50 hover:duration-300 hover:ease-in-out z-2 ">
                {movie.poster_path ? (
                  <img
                  className="w-full h-full rounded-t-lg z-10 "
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />
                ) : (<div className="w-full h-full rounded-t-lg bg-muted flex flex-col items-center justify-center gap-2">
                  <Image className="w-10 h-10 text-muted-foreground" />
      <span className="text-muted-foreground text-xs">No Image</span>
    </div>)}
                </div>
                <div className="w-full h-[100px] px-3">
                  <div className="flex flex-row items-center gap-1">
                    <FaStar className="h-4 w-4 fill-[#FDE047]" />
                    <p>{movie.vote_average.toFixed(1)}/10</p>
                  </div>
                  <p className="text-lg font-normal">{movie.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <PaginationComponent
          prevPage={nextPage}
          nextPage={prevPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
};

export default Category;

"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/app/_constants";
import { Response } from "@/app/_constants";
import { title } from "process";
import { Link } from "lucide-react";
import { FaStar } from "react-icons/fa6";

type MovieOverviewProps = {
  movieId: number;
};

export const MovieOverview = (props: MovieOverviewProps) => {
  const { movieId } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/${movieId}?language=en-US`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2ZTY3OWMzNmQ3MzMxNGJkYWJiNmY0MzA2NjRjOCIsIm5iZiI6MTc2MzUyMjg0Mi43ODgsInN1YiI6IjY5MWQzOTFhN2QwOTFjNzQxMzU3Y2Y1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsBHhf6bC6Y2ZqgPWinC5LgILDD4tqpuh6zO-CAwvIU",
            accept: "application/json",
          },
        }
      );

      const data = (await res.json()) as Response;

      setMovies(data.results);
      setLoading(false);
    };

    GetData();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="w-screen px-20 gap-15">
  //       <div className="flex flex-col gap-8">
  //         <div className="w-100% h-9 flex justify-between items-center">
  //           <Skeleton className="w-[250px] h-8 rounded-full"></Skeleton>
  //           <Skeleton className="w-[250px] h-8 rounded-full"></Skeleton>
  //         </div>
  //         <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center ">
  //           {[...Array(10)].map((_, i) => (
  //             <Skeleton key={i} className="w-full aspect-2/3 rounded-t-lg" />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="w-screen px-20 gap-15">
      <div className="flex flex-col gap-8">
        <div className="w-100% flex justify-between items-center">
          <p className="font-semibold text-2xl">{title}</p>
        </div>
        <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center ">
          {movies.slice(0, 10).map((movie) => (
            <Link
              href={`/movie/${movie?.id}`}
              key={movie.id}
              className="w-full bg-muted rounded-lg"
            >
              <div className="w-full aspect-2/3 rounded-t-lg hover:bg-black hover:opacity-50 hover:duration-300 hover:ease-in-out z-2 ">
                <img
                  className="w-full h-full rounded-t-lg z-10 "
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                />
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
  );
};

// };

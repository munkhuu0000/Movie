"use client";

import { Pagination } from "@/components/ui/pagination";
import { SimilarMovies } from "../../_components/SimilarMovies";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Moviecard } from "@/app/_components/MovieCard";
import { useParams } from "next/navigation";

const MoreLikeThis = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2ZTY3OWMzNmQ3MzMxNGJkYWJiNmY0MzA2NjRjOCIsIm5iZiI6MTc2MzUyMjg0Mi43ODgsInN1YiI6IjY5MWQzOTFhN2QwOTFjNzQxMzU3Y2Y1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsBHhf6bC6Y2ZqgPWinC5LgILDD4tqpuh6zO-CAwvIU",
            accept: "application/json",
          },
        }
      );

      const data = (await res.json()) as MovieResponse;

      setMovies(data.results);
      setLoading(false);
    };

    GetData();
  }, []);

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
    <div className="w-screen px-20 gap-15">
      <div className="flex flex-col gap-8">
        <div className="w-100% flex justify-between items-center">
          <p className="font-semibold text-2xl">More Like This</p>
        </div>
        <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center ">
          {movies.map((movie) => (
            <Moviecard
              key={movie?.id}
              id={movie?.id}
              poster_path={movie?.poster_path}
              vote_average={movie?.vote_average}
              title={movie?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThis;

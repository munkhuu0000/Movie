"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Moviecard } from "./MovieCard";

export const MoviesByGenre = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParams = useSearchParams();

  const genreIds = useMemo(
    () => searchParams.get("genreIds")?.split(",") || [],
    [searchParams]
  );

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${1}`,
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
      console.log(data);

      setMovies(data?.results);
    };

    GetData();
  }, [genreIds]);
  return (
    <div>
      <div className="w-100% grid grid-rows-2 grid-cols-5 gap-8 justify-center">
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
  );
};

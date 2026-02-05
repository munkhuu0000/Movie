"use client";

import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Moviecard } from "./MovieCard";
import { useSearchParams } from "next/navigation";

type movieId = {
  id: number;
};

export function SimilarMovies(props: movieId) {
  const { id } = props;
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(() => {
    const Getdata = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2ZTY3OWMzNmQ3MzMxNGJkYWJiNmY0MzA2NjRjOCIsIm5iZiI6MTc2MzUyMjg0Mi43ODgsInN1YiI6IjY5MWQzOTFhN2QwOTFjNzQxMzU3Y2Y1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsBHhf6bC6Y2ZqgPWinC5LgILDD4tqpuh6zO-CAwvIU",
            accept: "application/json",
          },
        },
      );
      const data = (await res.json()) as MovieResponse;
      console.log(data);
      setSimilarMovies(data?.results);
    };
    Getdata();
  }, []);

  return (
    <div className="w-100% grid grid-rows-1 grid-cols-5 gap-8 justify-center ">
      {similarMovies?.slice(0, 5).map((movie) => (
        <Moviecard
          key={movie?.id}
          id={movie?.id}
          poster_path={movie?.poster_path}
          vote_average={movie?.vote_average}
          title={movie?.title}
        />
      ))}
    </div>
  );
}

"use client";

import { Divide } from "lucide-react";
import { useEffect, useState } from "react";

type Castprops = {
  movieId: number;
};
type Response = {};

export const Cast = (props: Castprops) => {
  const { movieId } = props;
  const [movieCast, setMovieCast] = useState<Castprops>();

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
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

      setMovieCast(data.id);
    };
    GetData();
  });
  return (
    <div
      className="w-screen h-10 border-amber-300 border-2
  "
    ></div>
  );
};

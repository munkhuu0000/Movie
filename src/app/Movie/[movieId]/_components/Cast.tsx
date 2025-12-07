"use client";

import { Divide } from "lucide-react";
import { useEffect, useState } from "react";

type Castprops = {
  movieId: number;
};
type Response = {
  id: number;
  cast: [];
  crew: [];
};

type cast = {
  adult: boolean;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export const Cast = (props: Castprops) => {
  const { movieId } = props;
  const [movieCast, setMovieCast] = useState<Response>();

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
      console.log(data);

      const cast = data?.cast
        .sort((a: cast, b: cast) => b?.popularity - a?.popularity)
        .slice(0, 3)
        .map((el: cast) => el?.name)
        .join(".");

      setMovieCast(data);
    };
    GetData();
  }, []);
  return (
    <div className="w-full px-45 flex flex-col gap-6 border-amber-300 border-4">
      <div className="h-[41px] border-b-2 border-[#E4E4E7]"></div>
    </div>
  );
};

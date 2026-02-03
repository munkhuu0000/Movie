"use client";

import { useEffect, useState } from "react";

type Castprops = {
  movieId: number;
};
type Credits = {
  id: number;
  cast: cast[];
  crew: crew[];
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

export const MovieCredits = (props: Castprops) => {
  const { movieId } = props;
  const [credit, setCredit] = useState({
    stars: "",
    director: "",
    writers: "",
  });

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
      const data = (await res.json()) as Credits;
      console.log(data);

      const stars = data.cast
        .sort((a, b) => b?.popularity - a?.popularity)
        .slice(0, 3)
        .map((el) => el.name)
        .join("  ·  ");

      const director = data?.crew?.filter((el) => el.job === "Director")[0]
        .name;
      console.log(director);

      const writers = data?.crew?.filter((el) => el?.job === "Screenplay")[0]
        ?.name;

      setCredit({ stars, director, writers });

      // setMovieCast(data);
    };
    GetData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full h-[41px] flex gap-10 border-b-2 border-[#E4E4E7]">
        <p>Stars</p>
        <div className="h-[41px] w-full ">{credit?.stars}</div>
      </div>
      <div className="w-full h-[41px] flex gap-10 border-b-2 border-[#E4E4E7]">
        <p>Director</p>
        <div className="h-[41px] w-full">{credit?.director}</div>
      </div>
      <div className="w-full h-[41px] flex gap-10 border-b-2 border-[#E4E4E7]">
        <p>Writer</p>
        <div className="h-[41px] w-full">{credit?.writers}</div>
      </div>
    </div>
  );
};

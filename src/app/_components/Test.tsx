import { useEffect, useState } from "react";

export type Movie = {
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

export const Test = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
    };

    GetData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-10 bg-gray-100">
      {movies.map((movie) => (
        <div key={movie.id} className="w-[500px] h-[500px]">
          {" "}
          movie={movie}{" "}
        </div>
      ))}
    </div>
  );
};

"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Cast } from "./Cast";

type MovieIntroProps = {
  movieId: string;
};
type Response = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type genres = { id: number; name: string };

export const MovieIntro = (props: MovieIntroProps) => {
  const { movieId } = props;
  const [intro, setIntro] = useState<Response>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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

      setIntro(data);
      setLoading(false);
    };

    GetData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen mt-[52px] px-45 flex flex-col gap-6">
        <Skeleton className="w-full h-[72px] flex justify-between ">
          <div className="flex flex-col">
            <p className="text-xs font-medium">Rating</p>
            <div className="flex flex-row justify-between">
              <FaStar className="h-7 w-7 fill-[#FDE047]" />
              <p className="font-bold text-[18px]">
                {" "}
                {intro?.vote_average.toFixed(1)}
              </p>
              <p className="text-muted-foreground flex items-center text-[16px]">
                /10
              </p>
            </div>
            <p className="font-normal text-[12px]">{intro?.vote_count}</p>
          </div>
        </Skeleton>
        <div className="w-full h-[428px] flex gap-8 border-2 border-black">
          <div className="w-[290] h-[428] border-2 border-amber-300">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + intro?.poster_path}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex h-fit gap-5 flex-col">
          <div className="flex gap-3"></div>
          <p>{intro?.overview}</p>
        </div>
        <div className="h-[163] border-2 border-amber-950"></div>
        <div className="h-[441] border-2 border-amber-950"></div>
      </div>
    );
  }
  return (
    <div className="w-screen mt-[52px] px-45 flex flex-col gap-6">
      <div className="w-full h-[72px] flex justify-between ">
        <div className="flex flex-col">
          <p className="text-4xl font-bold">{intro?.title}</p>
          <p className="font-normal text-lg">
            {intro?.release_date} · PG · {intro?.runtime}m
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-medium">Rating</p>
          <div className="flex flex-row justify-between">
            <FaStar className="h-7 w-7 fill-[#FDE047]" />
            <p className="font-bold text-[18px]">
              {intro?.vote_average.toFixed(1)}
            </p>
            <p className="text-muted-foreground flex items-center text-[16px]">
              /10
            </p>
          </div>
          <p className="font-normal text-[12px]">{intro?.vote_count}</p>
        </div>
      </div>
      <div className="w-full h-[428px] flex gap-8 border-2 border-black">
        <div className="w-[290] h-[428] border-2 border-amber-300">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + intro?.poster_path}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex h-fit gap-5 flex-col">
        <div className="flex gap-3">
          {intro?.genres.map((el) => (
            <Link href={`/genre/${el?.id}`} key={el?.id}>
              <Badge variant="outline">{el?.name}</Badge>
            </Link>
          ))}
        </div>
        <p>{intro?.overview}</p>
      </div>
      <Cast movieId={Number(movieId)} />
      <div className="h-[163] border-2 border-amber-950"></div>
      <div className="h-[441] border-2 border-amber-950"></div>
    </div>
  );
};

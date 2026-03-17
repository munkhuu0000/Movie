"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Image } from "lucide-react";
import { PopOverTrailer } from "@/app/_components/PopOverTrailer";
import { MovieCredits } from "./MovieCredits";
import { SimilarMovies } from "@/app/_components/SimilarMovies";

type MovieIntroProps = {
  movieId: number;
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
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
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

      setIntro(data);
      setLoading(false);
    };

    GetData();
  }, [movieId]);

  if (loading) {
    return (
      <div className="w-screen mt-[52px] px-45 flex flex-col gap-6 min-h-screen">
        <Skeleton className="w-full h-[72px]"></Skeleton>
        <div className="w-full flex flex-row justify-around gap-8">
          <Skeleton className="w-[25%] h-[428px] rounded-lg" />
          <Skeleton className="flex-1 h-[428px]" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="w-16 h-6 rounded-full" />
          <Skeleton className="w-16 h-6 rounded-full" />
          <Skeleton className="w-16 h-6 rounded-full" />
        </div>
        <Skeleton className="w-full h-20" />
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
      <div className="w-full flex flex-row justify-around gap-8">
        {intro?.poster_path ? (
          <img
            src={"https://image.tmdb.org/t/p/w500/" + intro.poster_path}
            className="object-center object-cover w-[25%] h-[428px] rounded-lg"
            alt="movie poster"
          />
        ) : (
          <div className="w-[25%] h-[428px] rounded-lg bg-muted flex flex-col items-center justify-center gap-2">
            <Image className="w-10 h-10 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">No Image</span>
          </div>
        )}
        <div className="flex-1 h-[428px] relative">
          {intro?.poster_path ? (
            <img
              src={"https://image.tmdb.org/t/p/w500/" + intro.poster_path}
              className="object-center object-cover w-full h-full"
              alt="movie poster"
            />
          ) : (
            <div className="w-full h-full bg-muted flex flex-col items-center justify-center gap-2">
              <Image className="w-10 h-10 text-muted-foreground" />
              <span className="text-muted-foreground text-xs">No Image</span>
            </div>
          )}
          <div className="absolute top-[85%] left-[5%] ">
            <PopOverTrailer id={movieId} />
          </div>
        </div>
      </div>
      <div className="flex h-fit gap-5 flex-col pb-3">
        <div className="flex gap-3">
          {intro?.genres.map((el) => (
            <Link href={`/genre/${el?.id}`} key={el?.id}>
              <Badge variant="outline">{el?.name}</Badge>
            </Link>
          ))}
        </div>
        <p>{intro?.overview}</p>
      </div>
      <MovieCredits movieId={movieId} />
      <div className="w-100% flex justify-between items-center">
        <p className="font-semibold text-2xl">More like this</p>
        {/* <Link href={`/MoreLikeThis`}>
          <button className="flex flex-row gap-2 px-4 py-2 font-medium text-sm items-center">
            See more
            <FaArrowRightLong />
          </button>
        </Link> */}
      </div>
      <SimilarMovies id={movieId} />
    </div>
  );
};

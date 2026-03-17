"use client";

import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PopOverTrailer } from "./PopOverTrailer";

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
export function CarouselPlugin() {
  const [carousel, setCarousel] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
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

      setCarousel(data.results);
      setLoading(false);
    };

    GetData();
  }, []);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  if (loading) {
    return (
      <div className="w-scfreen h-[600px]">
        <div className="w-screen h-[600px]">
          <Skeleton className="w-screen h-[600px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-scfreen h-[600px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carousel?.slice(0, 5).map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-screen flex flex-row justify-around items-center px-0">
                <img 
                  src={
                    "https://image.tmdb.org/t/p/original/" + item?.poster_path
                  }
                  className="w-screen h-[600px] object-center object-cover"
                  alt="movie poster"
                />
                <div className="w-[404px] h-[350px] left-[140px] top-[180px] absolute flex flex-col gap-2">
                  <p className="text-base text-[#FFFFFF] font-normal font-family: var(--font-inter);">
                    Now playing:
                  </p>
                  <p className="text-[36px] text-[#FFFFFF] font-extrabold font-family: var(--font-inter);">
                    {item?.title}
                  </p>
                  <div className="flex flex-row gap-1">
                    <FaStar className="h-7 w-7 fill-[#FDE047]" />
                    <p className="text-[18px] font-semibold text-[#FAFAFA]">
                      {item?.vote_average.toFixed(1)}
                      <span className="text-[16px] font-normal text-[#FAFAFA]">
                        /10
                      </span>
                    </p>
                  </div>
                  <div className="w-[302px] h-fit pt-4 ">
                    <p className="text-[12px] font-normal text-[#FAFAFA]">
                      {item?.overview}
                    </p>
                  </div>
                  <PopOverTrailer id={item.id} />
                </div>
              </div>
              <div className="w-fit h-fit flex gap-2 absolute top-[90%] left-[50%] translate-[-50%]">
                {carousel?.slice(0, 5).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-white" : "bg-[#ffffff7e]"
                    }`}
                  ></div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[5%] z-10" />
        <CarouselNext className="absolute left-[95%] z-10" />
      </Carousel>
    </div>
  );
}

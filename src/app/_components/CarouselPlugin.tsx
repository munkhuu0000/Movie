"use client";

import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa6";
import { TfiControlPlay } from "react-icons/tfi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import ReactPlayer from "react-player";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Movie } from "./unUsed/UpComing";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <div className="w-scfreen h-[600px]">
      {loading ? (
        <div className="w-screen h-[600px]">
          <Skeleton className="w-screen h-[600px]" />
        </div>
      ) : (
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
                    className="w-screen aspect-5/2 object-center object-cover"
                  />
                  <div className="w-[404px] h-[264px] left-[140px] top-[260px] absolute">
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
                        <span className="text-[16px] font-normal text-[#71717A]">
                          /10
                        </span>
                      </p>
                    </div>
                    <div className="w-[302px] h-30 pt-4 ">
                      <p className="text-[12px] font-normal text-[#FAFAFA]">
                        {item?.overview}
                      </p>
                    </div>
                    <div className="bg-[#F4F4F5] text-[#18181B] self-en w-[145px] rounded-lg px-2 h-10 flex items-center">
                      <Popover>
                        <PopoverTrigger className="flex flex-row gap-2 items-center">
                          <TfiControlPlay />
                          Watch trailer
                        </PopoverTrigger>
                        <PopoverContent className="relative w-[997px] h-[561px] top-[90%] left-[30%] bg-[#FAFAFA]">
                          <ReactPlayer
                            src={
                              "https://api.themoviedb.org/3/movie/" +
                              item?.id +
                              "/videos"
                            }
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
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
      )}
    </div>
  );
}

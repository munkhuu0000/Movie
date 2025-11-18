"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa6";
import { TfiControlPlay } from "react-icons/tfi";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  {
    image: "/firstSection/Wicked.jpg",
    name: "Wicked",
    imdb: "7.4",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "/firstSection/dune.jpg",
    name: "Dune",
    imdb: "8.0",
    description:
      "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
  },
  {
    image: "/firstSection/interstellar.webp",
    name: "Interstellar",
    imdb: "8.7",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index} className="relative">
            <div className="w-screen flex flex-row justify-around items-center px-0">
              <img
                src={item.image}
                className="w-screen h-[600px] object-cover"
              />
              <div className="w-[404px] h-[264px] left-[140px] top-[260px] absolute">
                <p className="text-base text-[#FFFFFF] font-normal font-family: var(--font-inter);">
                  Now playing:
                </p>
                <p className="text-[36px] text-[#FFFFFF] font-extrabold font-family: var(--font-inter);">
                  {item.name}
                </p>
                <div className="flex flex-row gap-1">
                  <FaStar className="h-7 w-7 fill-[#FDE047]" />
                  <p className="text-[18px] font-semibold text-[#FAFAFA]">
                    {item.imdb}
                    <span className="text-[16px] font-normal text-[#71717A]">
                      /10
                    </span>
                  </p>
                </div>
                <div className="w-[302px] h-30 pt-4 ">
                  <p className="text-[12px] font-normal text-[#FAFAFA]">
                    {item.description}
                  </p>
                </div>
                <Button className="bg-[#F4F4F5] text-[#18181B] self-end">
                  <TfiControlPlay />
                  Watch trailer
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[5%] z-10" />
      <CarouselNext className="absolute left-[95%] z-10" />
    </Carousel>
  );
}

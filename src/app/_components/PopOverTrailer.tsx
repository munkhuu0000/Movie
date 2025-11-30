"use client";

import { TfiControlPlay } from "react-icons/tfi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

type popOver = {
  id: number;
};

type trailer = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

type Response = {
  page: number;
  results: trailer[];
  total_pages: number;
  total_results: number;
};
export function PopOverTrailer(props: popOver) {
  const [mTrailer, setMTrailer] = useState<string>("");

  useEffect(() => {
    const GetData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/videos`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process?.env.NEXT_PUBLIC_TMDB_API_TOKEN} `,
            accept: "application/json",
          },
        }
      );

      const data = (await res.json()) as Response;
      const oTrailer = data.results?.find(
        (element: any) => element.type === "Trailer"
      )?.key;

      console.log(data);

      // setMTrailer(data?.results[0].key);
      setMTrailer(oTrailer?.key || "");
    };

    GetData();
  }, []);

  return (
    <div className="w-screen h-[600px]">
      <div className="bg-[#F4F4F5] text-[#18181B] w-[145px] rounded-lg px-2 h-10 flex items-center">
        <Popover>
          <PopoverTrigger className="flex flex-row gap-2 items-center">
            <TfiControlPlay />
            Watch trailer
          </PopoverTrigger>
          <PopoverContent className="relative w-[997px] h-[561px] top-[90%] left-[30%] bg-[#FAFAFA]">
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${mTrailer}`}
              controls
              autoPlay
              width="100%"
              height="100%"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

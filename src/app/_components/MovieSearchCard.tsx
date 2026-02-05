"use client";
import { Star } from "lucide-react";
import { TitleCard } from "./TitleCard";

type MovieSearchCardProps = {
  // movie:MovieRes
  image: string;
  title: string;
  rate: number;
  date: string;
  id: number;
};

export const MovieSearchCard = (props: MovieSearchCardProps) => {
  const { image, title, rate, date, id } = props;
  return (
    <div className="w-full h-full flex justify-between p-2 gap-4 border-b border-b-gray-300 ">
      <img className="w-[67px] h-[100px] border rounded-md " src={image} />
      <div className="flex flex-col justify-between items-center flex-1 h-full gap-3 ">
        <div className="w-full h-full flex flex-col">
          <h1 className="font-semibold text-xl"> {title}</h1>
          <span className="flex items-center gap-1 text-sm">
            <div className="flex gap-2 items-center">
              <Star fill="#FDE047" className="text-[#FDE047]" />
              <div className="flex items-center">
                <p className={`text-sm font-medium`}>{props.rate.toFixed(1)}</p>
                <span className="text=[#71717A] text-xs font-normal">/ 10</span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex w-full flex-row justify-between items-center">
          <p className="text-[#09090B] text-sm font-medium dark:text-white">
            {date}
          </p>
          <div className="w-fit">
            <TitleCard title="" href={`/movie/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

"use cleint";

import Link from "next/link";
import { FaStar } from "react-icons/fa";

type card = {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
};

export const Moviecard = (props: card) => {
  return (
    <Link
      href={`/movie/${props?.id}`}
      key={props?.id}
      className="w-full bg-muted rounded-lg"
    >
      <div className="w-full aspect-2/3 rounded-t-lg hover:bg-black hover:opacity-50 hover:duration-300 hover:ease-in-out z-2 ">
        {props?.poster_path ? (
          <img
            className="w-full h-full rounded-t-lg z-10"
            src={"https://image.tmdb.org/t/p/w500/" + props?.poster_path}
          />
        ) : (
          <div className="w-full h-full rounded-t-lg bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">No Image</span>
          </div>
        )}
      </div>
      <div className="w-full h-[100px] px-3">
        <div className="flex flex-row items-center gap-1">
          <FaStar className="h-4 w-4 fill-[#FDE047]" />
          <p>{props?.vote_average.toFixed(1)}/10</p>
        </div>
        <p className="text-lg font-normal">{props?.title}</p>
      </div>
    </Link>
  );
};

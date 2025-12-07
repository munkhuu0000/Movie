"use client";

import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Genres } from "./Genres";

export const Header = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="w-screen">
      {loading ? (
        <div className="flex flex-row justify-around items-center py-4">
          <Skeleton className="w-[92px] h-9 gap-2 " />
          <Skeleton className="w-[488px] h-9 " />
          <Skeleton className="w-9 h-9 " />
        </div>
      ) : (
        <div className="w-screen h-[59px] flex flex-row justify-around items-center px-4">
          <div className="w-[92px] h-fit gap-2 flex flex-row items-center">
            <img src="/header/film.png" className="h-5 w-5 " />
            <p className="text-base font-bold font-inter">Movie Z</p>
          </div>
          <div className="w-[488px] h-9 flex flex-row gap-2">
            <Genres />
            <input
              className="w-[379px h-9 border border-[#E4E4E7] rounded-md px-2"
              placeholder="Search"
            />
          </div>
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

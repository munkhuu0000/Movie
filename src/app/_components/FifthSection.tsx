"use client";

import { useEffect, useState } from "react";
import { TbMovie } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { Skeleton } from "@/components/ui/skeleton";

export const FifthSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen mt-5 min-h-[280px] bg-indigo-700 px-20 flex items-center">
        <div className="w-[247px] h-[200px] flex flex-col items-center gap-3">
          <Skeleton className="w-[120px] h-5 rounded-full" />
          <Skeleton className="w-[180px] h-4 rounded-full" />
        </div>
        <div className="w-[489px] h-[200px]" />
        <div className="w-[300px] h-[200px] flex flex-col items-center gap-4">
          <Skeleton className="w-[140px] h-4 rounded-full" />
          <div className="flex flex-row gap-3">
            <Skeleton className="w-4 h-4 rounded" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3 rounded-full" />
              <Skeleton className="w-[120px] h-3 rounded-full" />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Skeleton className="w-4 h-4 rounded" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3 rounded-full" />
              <Skeleton className="w-[120px] h-3 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-[247px] h-[200px] flex flex-col items-start gap-4">
          <Skeleton className="w-20 h-4 rounded-full" />
          <div className="flex flex-row gap-3">
            <Skeleton className="w-[60px] h-3 rounded-full" />
            <Skeleton className="w-[60px] h-3 rounded-full" />
            <Skeleton className="w-[50px] h-3 rounded-full" />
            <Skeleton className="w-[55px] h-3 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen mt-5 h-[280px] bg-indigo-700 px-20 flex items-center">
      <div className="w-[247px] h-[200px] flex flex-col items-center gap-3">
        <div className="w-[247px] h-5 flex flex-row gap-2">
          <TbMovie className="w-6 h-6 text-[#FAFAFA]" />
          <p className="text-base font-bold font-inter text-[#FAFAFA]">
            Movie Z
          </p>
        </div>
        <p className="text-sm text-[#FAFAFA] font-normal">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="w-[489px] h-[200px]"></div>
      <div className="w-[300px] h-[200px] flex flex-col items-center gap-3">
        <p className="text-sm text-[#FAFAFA] font-normal">
          Contact Information
        </p>
        <div className="w-fit h-fit flex flex-row gap-3">
          <div className="w-fit h-fit flex items-center justify-center">
            <CiMail className="text-[#FAFAFA] w-4 h-4" />
          </div>
          <div className="w-fit h-fit">
            <p className="text-sm text-[#FAFAFA] font-normal">Email:</p>
            <p className="text-sm text-[#FAFAFA] font-normal">
              support@movieZ.com
            </p>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-row gap-3">
          <div className="w-fit h-fit flex items-center justify-center">
            <FiPhone className="text-[#FAFAFA] w-4 h-4" />
          </div>
          <div className="w-fit h-fit">
            <p className="text-sm text-[#FAFAFA] font-normal">Phone:</p>
            <p className="text-sm text-[#FAFAFA] font-normal">
              +976 (11) 123-4567
            </p>
          </div>
        </div>
      </div>

      <div className="w-[247px] h-[200px] flex flex-col items-start gap-3">
        <p className="text-sm text-[#FAFAFA] font-normal">Follow us</p>
        <div className="w-fit h-fit flex flex-row gap-3">
          <p className="text-sm text-[#FAFAFA] font-normal">Facebook</p>
          <p className="text-sm text-[#FAFAFA] font-normal">Instagram</p>
          <p className="text-sm text-[#FAFAFA] font-normal">Twitter</p>
          <p className="text-sm text-[#FAFAFA] font-normal">Youtube</p>
        </div>
      </div>
    </div>
  );
};

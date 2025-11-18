"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

export const FifthSection = () => {
  return (
    <div className="w-screen h-[280px] bg-indigo-700 px-20 flex items-center">
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

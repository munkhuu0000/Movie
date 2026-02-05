"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Ghost } from "lucide-react";
import Link from "next/link";

type TitleCardProps = {
  title: string;
  href?: string;
};

export const TitleCard = ({ title, href }: TitleCardProps) => {
  return (
    <div className="flex w-fit justify-start">
      {href && (
        <Link href={href || "/"}>
          <Button
            variant="link"
            className="bg-transparent text-sm font-medium text-black border-none dark:text-white cursor-pointer"
          >
            See more <ArrowRight />
          </Button>
        </Link>
      )}
    </div>
  );
};

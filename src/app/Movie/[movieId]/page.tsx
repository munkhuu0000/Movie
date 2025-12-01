"use client";

import { FirstSection } from "@/app/_components/FirstSection";
import { Header } from "@/app/_components/Header";
import { use } from "react";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);

  return (
    <div>
      <Header />
      {movieId}
    </div>
  );
};
export default MovieDetailPage;

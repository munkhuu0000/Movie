"use client";

import { FirstSection } from "@/app/_components/FirstSection";
import { Header } from "@/app/_components/Header";
import { use } from "react";
import { MovieIntro } from "./_components/MovieIntro";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);

  return (
    <div>
      <Header />
      <MovieIntro movieId={movieId} />
    </div>
  );
};
export default MovieDetailPage;

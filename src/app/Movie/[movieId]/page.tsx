"use client";

import { FirstSection } from "@/app/_components/FirstSection";
import { Header } from "@/app/_components/Header";
import { use } from "react";
import { MovieIntro } from "./_components/MovieIntro";
import { FifthSection } from "@/app/_components/FifthSection";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: number }>;
}) => {
  const { movieId } = use(params);

  return (
    <div>
      <Header />
      <MovieIntro movieId={movieId} />
      <FifthSection />
    </div>
  );
};
export default MovieDetailPage;

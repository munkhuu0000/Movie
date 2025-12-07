"use client";

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
      <MovieIntro movieId={Number(movieId)} />
    </div>
  );
};
export default MovieDetailPage;

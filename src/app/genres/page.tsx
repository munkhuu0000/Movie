"use client";

import { Genres } from "../_components/Genres";
import { MoviesByGenre } from "../_components/MoviesByGenre";

const Genre = () => {
  return (
    <div className="flex gap-10">
      <Genres />
      <MoviesByGenre />
    </div>
  );
};

export default Genre;

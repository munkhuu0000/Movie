"use client";

import { Genres } from "../_components/Genres";
import { MoviesByGenre } from "../_components/MoviesByGenre";

const Genre = () => {
  return (
    <div className="w-screen px-20 gap-15">
      <MoviesByGenre />
    </div>
  );
};

export default Genre;

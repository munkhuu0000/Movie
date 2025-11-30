"use client";
import { MovieSection } from "./MovieSection";
import { categories } from "../_constants";

export const MovieSections = () => {
  return (
    <div>
      {categories.map((el) => {
        return (
          <MovieSection
            key={el.categoryName}
            categoryName={el.categoryName}
            title={el.title}
            showButton={el.showButton}
          />
        );
      })}
    </div>
  );
};

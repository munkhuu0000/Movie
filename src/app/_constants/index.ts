export const categories = [
  { categoryName: "upcoming", title: "Upcoming", showButton: true },
  { categoryName: "top_rated", title: "Top Rated", showButton: true },
  { categoryName: "popular", title: "Popular", showButton: true },
];

export type categoriesType = {
  categoryName: string;
  title: string;
  showButton: boolean;
};

export type Movie = {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

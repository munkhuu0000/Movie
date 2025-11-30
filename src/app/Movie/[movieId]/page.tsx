import { use } from "react";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  return <div>My Post: {movieId}</div>;
};

export default MovieDetailPage;

import { Star, Clock } from "react-feather";
import { MovieProps } from "../contexts/movie.types";
import { useMovies } from "../contexts/MovieContext";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  movie: MovieProps;
}

export function MovieCard({
  title,
  poster,
  rating,
  runtime,
  movie,
}: MovieCardProps) {
  const { setSelectedMovie } = useMovies();

  return (
    <div onClick={() => setSelectedMovie(movie)} className='movie-card'>
      <img src={poster} alt={title} />

      <div>
        <div className='movie-info'>
          <span>{title}</span>
          <div className='meta'>
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

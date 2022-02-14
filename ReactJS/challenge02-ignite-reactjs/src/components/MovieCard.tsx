import { Star, Clock } from "react-feather";
import { api } from "../services/api";

import "../styles/movie-card.scss";
import { MovieProps } from "./types";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  movie: MovieProps;
  setSelectedMovie: (movie: MovieProps) => void;
}

export function MovieCard({
  title,
  poster,
  rating,
  runtime,
  movie,
  setSelectedMovie,
}: MovieCardProps) {
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

import { useEffect } from "react";
import { api } from "./../services/api";
import { MovieCard } from "./MovieCard";
import { MovieProps, GenreResponseProps, ContentProps } from "./types";

export function Content({
  selectedGenre,
  movies,
  setMovies,
  selectedGenreId,
  setSelectedGenre,
  setSelectedMovie,
}: ContentProps) {
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map((movie: MovieProps) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

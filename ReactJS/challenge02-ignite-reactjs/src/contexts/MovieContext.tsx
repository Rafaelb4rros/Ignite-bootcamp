import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import {
  GenreResponseProps,
  MovieContextData,
  MovieProps,
} from "./movie.types";

const MovieContext = createContext({} as MovieContextData);

export const MovieProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(null);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>();

  useEffect(() => {
    api
      .get<GenreResponseProps[]>(`genres`)
      .then(({ data: genres }) => setGenres(genres));
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then(({ data: movies }) => setMovies(movies));

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then(({ data: genre }) => setSelectedGenre(genre));
  }, [selectedGenreId]);

  const payload = useMemo(
    () => ({
      genres,
      movies,
      setSelectedGenreId,
      selectedMovie,
      selectedGenreId,
      selectedGenre,
      setSelectedMovie,
    }),
    [
      movies,
      setSelectedMovie,
      genres,
      setSelectedGenreId,
      selectedMovie,
      selectedGenreId,
      selectedGenre,
    ]
  );

  return (
    <MovieContext.Provider value={payload}>{children}</MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

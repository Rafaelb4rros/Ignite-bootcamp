import { useState } from "react";
import { MovieProps, GenreResponseProps } from "./components/types";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { MovieDetails } from "./components/MovieDetailsCard";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<null | MovieProps>(null);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar
          setSelectedGenreId={setSelectedGenreId}
          genres={genres}
          selectedGenreId={selectedGenreId}
          setGenres={setGenres}
        />
        <Content
          movies={movies}
          setSelectedMovie={setSelectedMovie}
          setMovies={setMovies}
          selectedGenreId={selectedGenreId}
          setSelectedGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </div>

      {selectedMovie && (
        <MovieDetails
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
}

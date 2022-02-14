export interface MovieProps {
  id: string;
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
  Plot: string;
  Production: string;
  Actors: string;
  Awards: string;
  Director: string;
  Writer: string;
  Year: number;
}

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface SideBarProps {
  setSelectedGenreId: (genreId: number) => void;
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setGenres: (genre: GenreResponseProps[]) => void;
}

export interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
  setMovies: (movie: MovieProps[]) => void;
  selectedGenreId: number;
  setSelectedMovie: (movie: MovieProps) => void;
  setSelectedGenre: (genre: GenreResponseProps) => void;
}

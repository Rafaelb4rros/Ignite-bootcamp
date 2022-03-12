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

export interface MovieContextData {
  genres: GenreResponseProps[];
  movies: MovieProps[];
  setSelectedGenreId: (genreId: number) => void;
  selectedMovie: MovieProps | null;
  selectedGenreId: number;
  selectedGenre: GenreResponseProps | undefined;
  setSelectedMovie: (movie: MovieProps | null) => void;
}

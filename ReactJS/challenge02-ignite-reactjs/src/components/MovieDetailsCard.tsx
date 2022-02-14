import { MovieProps } from "./types";
import { IoIosArrowBack } from "react-icons/io";

import "../styles/movie-details.scss";
import { Star } from "react-feather";

export const MovieDetails = ({
  selectedMovie,
  setSelectedMovie,
}: {
  selectedMovie: MovieProps;
  setSelectedMovie: (selectedMovie: MovieProps | null) => void;
}) => {
  return (
    <section className='movie-details'>
      <div className='movie_details-content'>
        <button
          className='movie_details-btn__back'
          onClick={() => setSelectedMovie(null)}
        >
          <IoIosArrowBack />
          Back
        </button>
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />

        <div className='movie_details-data'>
          <div className='movie-details-header'>
            <strong className='title'>
              {selectedMovie.Title}
              <span>
                <Star /> {selectedMovie.Ratings[0].Value}
              </span>
            </strong>

            <div className='info'>
              <span>{selectedMovie.Year}</span>

              {selectedMovie.Runtime}
            </div>
          </div>

          <div className='overview'>
            <div className='plot'>
              <strong>Plot</strong>
              <span>{selectedMovie.Plot}</span>
            </div>
            <div className='overview-info'>
              <strong>Actors</strong>
              <span className='starring'>{selectedMovie.Actors}</span>
              <strong>Creators</strong>
              <span className='created_by'>{selectedMovie.Writer}</span>
              <strong>Director</strong>
              <span className='director'>{selectedMovie.Director}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import MovieCard from "./MovieCard";
import { useState } from "react";
import Button from "./Button";
import "../style/movie.css";
import Modal from "./Modal";

let MovieList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  let handleModalDisplay = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <div>
      <div className="movie-list">
        {props.movies.length === 0 ? (
          <p>No Movie Available</p>
        ) : (
          props.movies.map((movie) => {
            return (
              <MovieCard
                key={movie.title}
                movie={movie}
                handleModalDisplay={handleModalDisplay}
                makeFavorite={props.makeFavorite}
                isFavorite={props.favorites.some((fav) => fav.id === movie.id)}
                handleWatched={props.handleWatched}
              />
            );
          })
        )}
      </div>
      <Button
        className="load-more"
        onclick={props.handlePageLoad}
        title="Load more"
      />
      {selectedMovie && showModal && (
        <Modal
          movie={selectedMovie}
          closeModal={closeModal}
          API_KEY={props.API_KEY}
        />
      )}
    </div>
  );
};

export default MovieList;

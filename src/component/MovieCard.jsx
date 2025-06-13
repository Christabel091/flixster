import { useState } from "react";
import "../style/movie.css";
let MovieCard = ({
  movie,
  handleModalDisplay,
  makeFavorite,
  isFavorite,
  handleWatched,
}) => {
  const [iswatched, setIsWatched] = useState(false);

  let makeWatched = (e) => {
    e.stopPropagation();
    setIsWatched(!iswatched);
    handleWatched(movie);
  };
  return (
    <>
      <div className="movie-card" onClick={() => handleModalDisplay(movie)}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p> {movie.vote_average}</p>
        <div className="icons">
          <i
            className={`fa-regular fa-bookmark ${
              isFavorite ? "fa-solid liked" : ""
            }`}
            onClick={(e) => makeFavorite(e, movie)}
          ></i>
          <i
            className={`fa-regular fa-eye ${
              iswatched ? "fa-solid watched" : ""
            }`}
            onClick={makeWatched}
          ></i>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

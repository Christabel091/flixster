import "../style/modal.css";
import { genres } from "../utils/utils";
import { useEffect, useState } from "react";
export default function Modal({ movie, closeModal, API_KEY }) {
  const [trailerKey, setTrailerKey] = useState("");
  let toWordDate = (date_str) => {
    const now = new Date(date_str);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  let displayGenre = () => {
    const names = movie.genre_ids
      .map((id) => {
        const match = genres.find((g) => g.id === id);
        return match ? match.name : null;
      })
      .filter(Boolean);

    return names.join(", ");
  };

  const fetchTrailerKey = async (movieId) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    if (!res.ok) throw new Error("Failed to fetch trailers");
    const data = await res.json();
    return data.results;
  };
  const getYouTubeTrailerKey = (videos) => {
    const trailer = videos.find(
      (v) => v.site === "YouTube" && v.type === "Trailer"
    );
    return trailer ? trailer.key : null;
  };

  useEffect(() => {
    (async () => {
      try {
        const videos = await fetchTrailerKey(movie.id);
        const key = getYouTubeTrailerKey(videos);
        setTrailerKey(key);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [movie.id]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{movie.title}</h1>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        <p>{"Overvoew: " + movie.overview}</p>
        <p>{displayGenre()}</p>
        <p>{"Released: " + toWordDate(movie.release_date)}</p>
        {trailerKey ? (
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              allowFullScreen
            />
          </div>
        ) : (
          <p>No trailer available</p>
        )}
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
}

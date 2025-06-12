import "../style/modal.css";
import { genres } from "../utils/utils";
import { useEffect, useState } from "react";
export default function Modal({ movie, closeModal, API_KEY }) {
  const [trailerKey, setTrailerKey] = useState("");
  const [runtime, setRuntime] = useState(null);
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

  async function fetchMovieDetails(movieId, apiKey) {
    try {
      const videoRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
      );
      const videoData = await videoRes.json();
      const ytTrailer = videoData.results.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );

      const detailsRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      );
      const detailsData = await detailsRes.json();

      return {
        trailerKey: ytTrailer ? ytTrailer.key : null,
        runtime: detailsData.runtime,
      };
    } catch (err) {
      console.error("Error:", err);
      return { trailerKey: null, runtime: null };
    }
  }

  useEffect(() => {
    async function fetchDetails() {
      const { trailerKey, runtime } = await fetchMovieDetails(
        movie.id,
        API_KEY
      );
      setTrailerKey(trailerKey);
      setRuntime(runtime);
    }

    fetchDetails();
  }, [movie.id]);
  function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{movie.title}</h1>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
        <p>{"runtime :" + convertToHoursAndMinutes(runtime)}</p>
        <p>{"Overview: " + movie.overview}</p>
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

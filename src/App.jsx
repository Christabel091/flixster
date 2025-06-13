import { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Footer from "./component/Footer";
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`;
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [originalMovies, setOriginalMovies] = useState(movies);
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      if (pageNumber === 1) {
        setOriginalMovies(data.results);
      }
    };
    fetchMovies();
  }, [pageNumber]);
  const handlePageLoad = () => setPageNumber(pageNumber + 1);

  let searchForMovie = () => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchInput
    )}&page=${pageNumber}`;
    const fetcSearchMovies = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setMovies(data.results);
    };
    fetcSearchMovies();
  };

  let clear = () => {
    setMovies(originalMovies);
  };

  const sortMovies = (criteria) => {
    let sorted = [...movies];
    switch (criteria) {
      case "AZ":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rate":
        sorted.sort((a, b) => b.vote_average - a.vote_average);
        break;
      case "date":
        sorted.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      default:
        sorted = [...originalMovies];
        break;
    }
    setMovies(sorted);
  };

  let makeFavorite = (event, movie) => {
    event.stopPropagation();
    setFavorites((prev) => {
      const isfav = prev.find((m) => m.id === movie.id);
      if (isfav) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  let handleWatched = (movie) => {
    setWatched((prev) => {
      const iswatched = prev.find((m) => m.id === movie.id);
      if (iswatched) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  let showSideBar = () => {
    setIsOpen(!isOpen);
    {
      isOpen && clear();
    }
  };

  let displayFavorite = () => {
    setMovies(favorites);
  };

  let displayWatched = () => {
    setMovies(watched);
  };
  return (
    <div className="container">
      <nav className={`side-bar ${isOpen ? "open-side-bar" : ""}`}>
        <i
          onClick={showSideBar}
          className="fas fa-solid fa-bars fa-2x side"
        ></i>
        {isOpen && (
          <Sidebar
            clear={clear}
            favorites={displayFavorite}
            watched={displayWatched}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
      </nav>
      <main className="App">
        <Header
          searchForMovie={searchForMovie}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          sortMovies={sortMovies}
          clear={clear}
        />
        <MovieList
          handlePageLoad={handlePageLoad}
          movies={movies}
          makeFavorite={makeFavorite}
          favorites={favorites}
          handleWatched={handleWatched}
          API_KEY={API_KEY}
          isOpen={isOpen}
        />
        <Footer />
      </main>
    </div>
  );
};

export default App;

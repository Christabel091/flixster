import { useState, useEffect } from "react";
import MovieList from "./component/MovieList";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
const App = () => {
  //initial movie load
  const [pageNumber, setPageNumber] = useState(1);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`;
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [originalMovies, setOriginalMovies] = useState(movies);
  //function to load initial movies
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setMovies(data.results);
      setOriginalMovies(data.results);
    };
    fetchMovies();
  }, [URL]);
  const handlePageLoad = () => setPageNumber(pageNumber + 1);

  //display when search is made
  let searchForMovie = () => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchInput
    )}&page=${pageNumber}`;

    if (searchInput === "") {
      setMovies(originalMovies);
    } else {
      console.log("search function ran");
      const fetcSearchMovies = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setMovies(data.results);
      };
      fetcSearchMovies();
    }
  };
  return (
    <div className="App">
      <Header
        searchForMovie={searchForMovie}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <MovieList handlePageLoad={handlePageLoad} movies={movies} />
      <Footer />
    </div>
  );
};

export default App;

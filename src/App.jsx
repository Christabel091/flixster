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
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  //function to load initial movies
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setMovies(prevMovies => [...prevMovies, ...data.results]);
      setOriginalMovies(data.results);
    };
    fetchMovies();
  }, [pageNumber]);
  const handlePageLoad = () => setPageNumber(pageNumber + 1);

  //display when search is made
  let searchForMovie = () => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchInput)}&page=${pageNumber}`;
    const fetcSearchMovies = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setMovies(data.results);
    };
    fetcSearchMovies();
  };
  //useffect to display now playing movies
  useEffect(()=>{
    if (searchInput === ''){
      setMovies(originalMovies);
    }
  }, [searchInput])
  //sort funcion
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
   
  let makeFavorite =(event, movie) =>{
    event.stopPropagation();
    setFavorites(prev => {
      const isfav = prev.find(m => m.id === movie.id);
      if(isfav){
        return prev.filter(m => m.id !== movie.id);
      }else{
        return [...prev, movie];
      }
    })
  }

  let handleWatched = (movie) => {
      setWatched(prev => {
          const iswatched = prev.find(m => m.id === movie.id);
          if(iswatched){
            return prev.filter(m => m.id !== movie.id);
          }else{
            return [...prev, movie];
          }
      })
  }
  return (
    <div className="App">
      <Header
        searchForMovie={searchForMovie}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        sortMovies={sortMovies}
      />
      <MovieList 
      handlePageLoad={handlePageLoad} 
      movies={movies} 
      makeFavorite={makeFavorite} 
      favorites={favorites} 
      handleWatched={handleWatched}
      />
      <Footer />
    </div>
  );
};

export default App;

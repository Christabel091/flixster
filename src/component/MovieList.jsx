import MovieCard from "./MovieCard";
import { fetchMovieData } from "../utils/utils";
import "../data/data"
import Button from "./Button";
import data from "../data/data";

let MovieList = () =>{
    let moviData = fetchMovieData(data);
    return(
       <div>
            <div className="movie-list">
                {moviData.map((movie) => {
                    return ( <MovieCard key = {movie.title} title={movie.title} img={movie.img} average={movie.vote_average}/>)
                })}  
            </div>
            <Button />
       </div>
    )
}

export default MovieList;
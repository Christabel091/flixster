import MovieCard from "./MovieCard";
import { fetchMovieData } from "../utils/utils";
import "../data/data"
import data from "../data/data";
let MovieList = () =>{
    let moviData = fetchMovieData(data);
    return(
        <div>
            r4an
        </div>
    )
}

export default MovieList;
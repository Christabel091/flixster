import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";

let MovieList = (props) =>{
   return(
       <div>
            <div className="movie-list">
               {props.movies.length == 0 ? (<p>No Movie Available</p>) : ( props.movies.map((movie) => {
                    return ( <MovieCard key = {movie.title} title={movie.title} img={movie.poster_path} average={movie.vote_average}/>)
                }) )}
            </div>
            <Modal />
            <Button onclick={props.handlePageLoad} title ="Load more" />
       </div>
    )
}

export default MovieList;
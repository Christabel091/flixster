import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";

let MovieList = (props) =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    let handleModalDisplay = () =>{
        setSelectedMovie(movie);
        setShowModal(true);
        console.log('selected movie set');
    }
   return(
       <div>
            <div className="movie-list">
               {props.movies.length == 0 ? (<p>No Movie Available</p>) : ( props.movies.map((movie) => {
                    return ( <MovieCard key = {movie.title} title={movie.title} img={movie.poster_path} average={movie.vote_average} handleModalDisplay ={handleModalDisplay}/>)
                }) )}
            </div>
            <Button onclick={props.handlePageLoad} title ="Load more" />
            {console.log(selectedMovie)}
            {selectedMovie && showModal && <Modal />}
       </div>
       
    )
}

export default MovieList;
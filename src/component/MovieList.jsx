import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";

let MovieList = (props) =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    let handleModalDisplay = (movie) =>{
        setSelectedMovie(movie);
        setShowModal(true);
       
    }
    const closeModal = () => {
        setSelectedMovie(null);
        setShowModal(false);
    }

    
   return(
       <div>
            <div className="movie-list">
               {props.movies.length == 0 ? (<p>No Movie Available</p>) : ( props.movies.map((movie) => {
                    return ( <MovieCard 
                        key = {movie.title} 
                        movie={movie} 
                        handleModalDisplay ={handleModalDisplay} 
                        makeFavorite={props.makeFavorite} 
                        isFavorite={props.favorites.some((fav) => fav.id === movie.id)}
                        handleWatched={props.handleWatched}
                        />)
                }) )}
            </div>
            <Button onclick={props.handlePageLoad} title ="Load more" />
            {selectedMovie && showModal && <Modal movie={selectedMovie} closeModal={closeModal}/>}
       </div>
       
    )
}

export default MovieList;
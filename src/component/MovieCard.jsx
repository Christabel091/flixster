import "../style/movie.css"
import Modal from "./Modal"
let MovieCard = ({movie, handleModalDisplay, makeFavorite, isFavorite}) => {
    
    return(
        <>
            <div className="movie-card" onClick={() => handleModalDisplay(movie)}>
                
                <h2 >{movie.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <p> {movie.vote_average}</p>
                <div className="icons">
                   
                    <i  className={`fa-regular fa-heart ${isFavorite ? 'fa-solid liked':''}`} onClick={(e) => makeFavorite(e, movie)}></i>
                </div>
            </div>
           
           
        </>
        
    )
}

export default MovieCard;
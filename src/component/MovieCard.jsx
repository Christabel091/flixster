import "../style/movie.css"
import Modal from "./Modal"
let MovieCard = ({movie, handleModalDisplay}) => {
    return(
        <>
            <div className="movie-card" onClick={() => handleModalDisplay(movie)}>
                <h2 >{movie.title}</h2>
                <img src={movie.img}/>
                <p> {movie.average}</p>
            </div>
           
           
        </>
        
    )
}

export default MovieCard;
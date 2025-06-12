import { useState } from "react"
import "../style/movie.css"
let MovieCard = ({movie, handleModalDisplay, makeFavorite, isFavorite,  handleWatched}) => {
    const [isChecked, setIsChecked] = useState(false)
    let makeWatched = () =>{
        handleWatched(movie);
        setIsChecked(!isChecked);
    }
    return(
        <>
            <div className="movie-card" onClick={() => handleModalDisplay(movie)}>
                
                <h2 >{movie.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <p> {movie.vote_average}</p>
                <div className="icons">
                    <i  className={`fa-regular fa-heart ${isFavorite ? 'fa-solid liked':''}`} onClick={(e) => makeFavorite(e, movie)}></i>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={makeWatched}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            </div>
           
           
        </>
        
    )
}

export default MovieCard;
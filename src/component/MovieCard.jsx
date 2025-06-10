import "../style/movie.css"
import Modal from "./Modal"
let MovieCard = (props) => {
    return(
        <>
            <div className="movie-card" onClick={() => props.handleModalDisplay}>
                <h2 >{props.title}</h2>
                <img src={props.img}/>
                <p> {props.average}</p>
            </div>
           
           
        </>
        
    )
}

export default MovieCard;
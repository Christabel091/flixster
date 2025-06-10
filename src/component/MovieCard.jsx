import "../movie.css"
let MovieCard = (props) => {
    return(
        <div className="movie-card">
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <p> {props.average}</p>
        </div>
    )
}

export default MovieCard;
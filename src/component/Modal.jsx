import "../style/modal.css"
export default function Modal ({movie, closeModal}) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    {console.log(movie)}
                    <h1>{movie.title}</h1>
                    <img src={movie.backdrop_path} />
                    <p>{movie.overview}</p>
                     <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    );
}
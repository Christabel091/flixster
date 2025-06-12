import "../style/modal.css"
export default function Modal ({movie, closeModal}) {
    let toWordDate = (date_str) =>{
        const now =new Date(date_str);
        const options = { weekday: 'long', month: 'long', day: 'numeric', year:"numeric"};
        const formattedDate = now.toLocaleDateString('en-US', options);
        return formattedDate;
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    <h1>{movie.title}</h1>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                    <p>{"Overvoew: "+movie.overview}</p>
                    <p>{"Released: " + (toWordDate(movie.release_date))}</p>
                     <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    );
}
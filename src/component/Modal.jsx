import "../style/modal.css"
export default function Modal (props) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                    <h1>{props.title}</h1>
                     <button>Close</button>
            </div>
        </div>
    );
}
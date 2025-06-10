import { useState } from "react";

let Button = () => {
    const [pageNumber, setPageNumber] = useState(1);
    return <button onClick={() => {setPageNumber}}> Load more</button>
}

export default Button;
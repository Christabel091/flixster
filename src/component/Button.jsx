import "../App.css"
let Button = (props) => {

    return <button onClick={props.onclick}> {props.title}</button>
}

export default Button;
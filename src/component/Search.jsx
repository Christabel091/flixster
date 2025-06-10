import { useEffect, useState } from "react";
import Button from "./Button";
import MovieCard from "./MovieCard";

let Search = (props) =>{
    let handleSearchChange = (event) =>{
        props.setSearchInput(event.target.value);
    }
   
    return(
        <div className="search">
            <input type="text" value={props.searchInput} onChange={handleSearchChange} placeholder="Search" />
            <Button onclick={props.searchForMovie} title = "search" />
            <Button onclick={console.log("playing now")} title="Now playing" />
        </div>
    )
}
export default Search;
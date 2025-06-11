import Search from "./Search";
import { useState } from "react";
export default function Header(props) {
  const [sortBy, setSortBy] = useState("");
  const handleSortChange = (event) => {
    const selected = event.target.value;
    setSortBy(selected);
    props.sortMovies(selected);
  };
  return (
    <div>
      <h1>FLIXSTER</h1>
      <Search
        searchForMovie={props.searchForMovie}
        searchInput={props.searchInput}
        setSearchInput={props.setSearchInput}
      />
      <select id="movies" value={sortBy} onChange={handleSortChange}>
        <option value="">SORT BY; </option>
        <option value="AZ">Alphabetic order</option>
        <option value="rate">Rating</option>
        <option value="date">release Date</option>
        <option value="comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Action">Action</option>
      </select>
    </div>
  );
}

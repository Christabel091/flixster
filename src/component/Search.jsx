import Button from "./Button";
import "../App.css";
let Search = (props) => {
  let handleSearchChange = (event) => {
    props.setSearchInput(event.target.value);
  };
  let clearSearchIput = () => {
    props.setSearchInput("");
    props.clear();
  };
  let searchOnEnter = (e) => {
    if (e.key === "Enter") {
      props.searchForMovie();
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        value={props.searchInput}
        onChange={handleSearchChange}
        placeholder="Search"
        onKeyDown={searchOnEnter}
      />
      <Button onclick={props.searchForMovie} title="search" />
      <Button onclick={clearSearchIput} title="Clear" />
    </div>
  );
};
export default Search;

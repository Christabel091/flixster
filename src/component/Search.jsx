import Button from "./Button";

let Search = (props) => {
  let handleSearchChange = (event) => {
    props.setSearchInput(event.target.value);
  };
  let clearSearchIput = () => {
    props.setSearchInput("");
  };
  return (
    <div className="search">
      <input
        type="text"
        value={props.searchInput}
        onChange={handleSearchChange}
        placeholder="Search"
      />
      <Button onclick={props.searchForMovie} title="search" />
      <Button onclick={clearSearchIput} title="Now playing" />
    </div>
  );
};
export default Search;

import "../App.css";
let Sidebar = ({ favorites, watched }) => {
  return (
    <div className="sidebarIcon">
      <div className="my-favorites" onClick={favorites}>
        <i className="fa-solid fa-bookmark fa-2x"></i>
        <p> my Favorite</p>
      </div>

      <div className="my-watchlist" onClick={watched}>
        <i className="fa-solid fa-plus fa-2x"></i>
        <p>My watchlist</p>
      </div>
    </div>
  );
};

export default Sidebar;

import "../App.css";
let Sidebar = ({ favorites, watched, clear, isOpen, setIsOpen }) => {
  return (
    <div className="sidebarIcon">
      <div
        className="my-home"
        onClick={() => {
          setIsOpen(!isOpen);
          clear();
        }}
      >
        <i class="fa fa-home"></i>
        <p>Home</p>
      </div>
      <div className="my-favorites" onClick={favorites}>
        <i className="fa-solid fa-bookmark fa-1x"></i>
        <p>Favorite</p>
      </div>

      <div className="my-watchlist" onClick={watched}>
        <i className="fa-solid fa-regular fa-eye fa-1x"></i>
        <p>watchlist</p>
      </div>
    </div>
  );
};

export default Sidebar;

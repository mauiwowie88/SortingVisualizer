import search_icon_light from "../../library/images/search-w.png";
import search_icon_dark from "../../library/images/search-b.png";

const SearchBox = ({ theme }) => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" />
      <img
        src={theme === "light" ? search_icon_light : search_icon_dark}
        alt=""
      />
    </div>
  );
};

export default SearchBox;

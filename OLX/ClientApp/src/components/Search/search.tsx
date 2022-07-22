import "bootstrap";
import "./search.css";
import searchLogo from "../../images/search.png";


const search = () => {
  return (
    <div>
      <form className="d-flex ">
        <input
          className="search me-2"
          placeholder="Пошук"
          aria-label="Пошук"
        />
      </form>
    </div>
  );
};
export default search;

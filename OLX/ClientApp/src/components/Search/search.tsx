import "bootstrap";
//import "./search.css";


const search = () => {
  return (
    <div>
      <form className="d-flex ">
        <input
          className="form-control me-2 border-warning"
          type="search"
          placeholder="Пошук"
          aria-label="Пошук"
        />
      </form>
    </div>
  );
};
export default search;

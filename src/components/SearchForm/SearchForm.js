import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__form">
        <input className="searchform__input"></input>
        <button className="searchform__button"></button>
      </form>
      <FilterCheckbox></FilterCheckbox>
    </div>
  );
}

export default SearchForm;

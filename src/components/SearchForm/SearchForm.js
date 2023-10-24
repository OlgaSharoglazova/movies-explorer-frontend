import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({
  onChange,
  onSearch,
  searchValue,
  isChecked,
  onChangeCheckbox,
}) {
  return (
    <div className="searchform">
      <form
        name="searchform"
        className="searchform__form"
        noValidate
        onSubmit={onSearch}
      >
        <input
          className="searchform__input"
          type="text"
          placeholder="Фильм"
          required
          value={searchValue || ""}
          onChange={onChange}
        ></input>
        <button className="searchform__button" type="submit"></button>
      </form>
      <span className="searchform__error"></span>
      <FilterCheckbox
        isChecked={isChecked}
        onChangeCheckbox={onChangeCheckbox}
      ></FilterCheckbox>
    </div>
  );
}

export default SearchForm;

// const [searchValue, setSearchValue] = React.useState(
//   JSON.parse(localStorage.getItem("searchform")) || ""
// );
// const [searchError, setSearchError] = React.useState("");
// const location = useLocation();

// function onChange(evt) {
//   const value = evt.target.value;
//   setSearchValue(value);
//   localStorage.setItem("searchform", JSON.stringify(value));
// }

//  function handleSearchMovies(evt) {
//   evt.preventDefault();
//    searchMovies();
//    if (location.pathname === "/movies") {
//      searchValue
//        ? console.log(searchValue)
//        : setSearchError("Введите ключевое слово");
//        console.log(searchError);
//    } else {
//     // searchMovies(searchValue);
//     console.log(searchValue);
//    }
//  }

//   React.useEffect(() => {
//    setSearchError("");
//  }, [searchValue]);

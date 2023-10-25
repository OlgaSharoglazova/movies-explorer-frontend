import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({
  onChange,
  searchValue,
  isChecked,
  onChangeCheckbox,
  handleFilter,
}) {
  const location = useLocation();

  function onSearch(evt) {
    evt.preventDefault();
    // if (location.pathname === "/movies") {
    //   handleFilter();
    // }
  }

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

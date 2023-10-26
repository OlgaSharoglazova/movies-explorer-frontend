import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, onChangeCheckbox }) {

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={onChangeCheckbox}
        checked={isChecked}
      ></input>
      <label className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;

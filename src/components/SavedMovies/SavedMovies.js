import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function SavedMovies({
  savedMovies,
  onBurgerClick,
  onSearch,
  //onChange,
 // searchValue,
  //isChecked,
  //onChangeCheckbox,
  handleMovieDelete,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (searchValue === "" && isChecked === false) {
      setFilteredSavedMovies(JSON.parse(localStorage.getItem("savedmovies")));
    }
  }, [searchValue, isChecked]);

  React.useEffect(() => {
    if (isChecked) {
      const filteredMovies = savedMovies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
          movie.duration <= SHORT_FILM_DURATION
      );
      setFilteredSavedMovies(filteredMovies);
    } else {
      const filteredMovies = savedMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredSavedMovies(filteredMovies);
    }
  }, [searchValue, isChecked, savedMovies]);

  // изменение данных в форме поиска

  function handleChangeSearchForm(evt) {
    const valueSearch = evt.target.value;
    setSearchValue(valueSearch);
  }

  // переключение короткометражек

  function handleChangeCheckbox(evt) {
    evt.preventDefault();
    const valueCheck = evt.target.checked;
    setIsChecked(valueCheck);
  }

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="saved-movies">
        <section className="saved-movies__container">
          <SearchForm
            onSearch={onSearch}
            onChange={handleChangeSearchForm}
            searchValue={searchValue}
            isChecked={isChecked}
            onChangeCheckbox={handleChangeCheckbox}
          ></SearchForm>
          <MoviesCardList
            savedMovies={savedMovies}
            filteredSavedMovies={filteredSavedMovies}
            searchValue={searchValue}
            handleMovieDelete={handleMovieDelete}
          ></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;

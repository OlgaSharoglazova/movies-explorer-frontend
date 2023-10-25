import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function Movies({
  allMovies,
  onBurgerClick,
  getAllMovies,
  onSearch,
  //onChange,
  //searchValue,
  //isChecked,
  //onChangeCheckbox,
  savedMovies,
  handleSaveMovie,
  handleMovieDelete,
  isLoggedIn
}) {
  const [filteredMovies, setFilteredMovies] = React.useState(
    JSON.parse(localStorage.getItem("filteredmovies")) || []
  );
  const [searchValue, setSearchValue] = React.useState(
    JSON.parse(localStorage.getItem("searchform")) || ""
  );
  const [isChecked, setIsChecked] = React.useState(
    JSON.parse(localStorage.getItem("checkbox")) || false
  );

  React.useEffect(() => {
    if (!isLoggedIn) setFilteredMovies([]);
  }, [isLoggedIn]);

  // первый поиск
  React.useEffect(() => {
    if (allMovies.length === 0 && searchValue !== "") getAllMovies();
  });

  // фильтрация

  React.useEffect(() => {
    if (isChecked) {
      const filteredMovies = allMovies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
          movie.duration <= SHORT_FILM_DURATION
      );
      localStorage.setItem("filteredmovies", JSON.stringify(filteredMovies));
      setFilteredMovies(filteredMovies);
    }
    else {
      const filteredMovies = allMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
      localStorage.setItem("filteredmovies", JSON.stringify(filteredMovies));
      setFilteredMovies(filteredMovies);
    }
  }, [searchValue, isChecked, savedMovies, allMovies]);

   // изменение данных в форме поиска

   function handleChangeSearchForm(evt) {
    const valueSearch = evt.target.value;
    setSearchValue(valueSearch);
    localStorage.setItem("searchform", JSON.stringify(valueSearch));
  }

  // переключение короткометражек

  function handleChangeCheckbox(evt) {
    evt.preventDefault();
    const valueCheck = evt.target.checked;
    setIsChecked(valueCheck);
    localStorage.setItem("checkbox", JSON.stringify(valueCheck));
  }

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm
            onSearch={onSearch}
            onChange={handleChangeSearchForm}
            searchValue={searchValue}
            isChecked={isChecked}
            onChangeCheckbox={handleChangeCheckbox}
          ></SearchForm>
          <MoviesCardList
            movies={filteredMovies}
            savedMovies={savedMovies}
            searchValue={searchValue}
            handleSaveMovie={handleSaveMovie}
            handleMovieDelete={handleMovieDelete}
          ></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;

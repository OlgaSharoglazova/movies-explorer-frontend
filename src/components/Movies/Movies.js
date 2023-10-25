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
  onChange,
  searchValue,
  isChecked,
  onChangeCheckbox,
  savedMovies,
  handleSaveMovie,
  handleMovieDelete,
  isLoggedIn
}) {
  const [filteredMovies, setFilteredMovies] = React.useState(
    JSON.parse(localStorage.getItem("filteredmovies")) || []
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
  }, [searchValue, isChecked]);

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm
            onSearch={onSearch}
            onChange={onChange}
            searchValue={searchValue}
            isChecked={isChecked}
            onChangeCheckbox={onChangeCheckbox}
           // handleFilter={handleFilter}
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

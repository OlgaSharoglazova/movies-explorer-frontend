import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function SavedMovies({
  onBurgerClick,
  savedMovies,
  onSearch,
  onChange,
  searchValue,
  isChecked,
  onChangeCheckbox,
  handleMovieDelete,
  onLike
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);

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
  }, [searchValue, isChecked]);

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="saved-movies">
        <section className="saved-movies__container">
          <SearchForm
            onSearch={onSearch}
            onChange={onChange}
            searchValue={searchValue}
            isChecked={isChecked}
            onChangeCheckbox={onChangeCheckbox}
          ></SearchForm>
          <MoviesCardList
            savedMovies={savedMovies}
            filteredSavedMovies={filteredSavedMovies}
            searchValue={searchValue}
            handleMovieDelete={handleMovieDelete}
            onLike={onLike}
          ></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;

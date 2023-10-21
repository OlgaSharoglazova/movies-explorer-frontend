import React, { useEffect } from "react";
import "./Movies.css";
import { moviesApi } from "../../utils/MoviesApi";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useCallback } from "react";
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
}) {
  // const [searchError, setSearchError] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  function searchMovies() {
    if (allMovies.length === 0) {
      getAllMovies();
    }
  }

  React.useEffect(() => {
    if (isChecked) {
      const filteredMovies = allMovies.filter(
        (movie) =>
          (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
          movie.duration <= SHORT_FILM_DURATION
      );
      setFilteredMovies(filteredMovies);
    } else {
      const filteredMovies = allMovies.filter(
        (movie) =>
          movie.nameRU.includes(searchValue) ||
          movie.nameEN.includes(searchValue)
      );
      setFilteredMovies(filteredMovies);
    }
  }, [searchValue, isChecked]);

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm
            searchMovies={searchMovies}
            onSearch={onSearch}
            onChange={onChange}
            searchValue={searchValue}
            isChecked={isChecked}
            onChangeCheckbox={onChangeCheckbox}
          ></SearchForm>
          <MoviesCardList movies={filteredMovies}></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;
// function filter(allMovies) {
//   if (isChecked) {
//     return allMovies.filter(
//       (movie) =>
//         (movie.nameRU.toLowerCase().includes(searchInfo.toLowerCase()) ||
//           movie.nameEN.toLowerCase().includes(searchInfo.toLowerCase())) &&
//         movie.duration <= SHORT_FILM_DURATION
//     );
//   } else {
//     return allMovies.filter(
//       (movie) =>
//         movie.nameRU.includes(searchInfo) || movie.nameEN.includes(searchInfo)
//     );
//   }
// }

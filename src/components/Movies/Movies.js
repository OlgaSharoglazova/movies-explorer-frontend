import React, { useEffect } from "react";
import "./Movies.css";
import { moviesApi } from "../../utils/MoviesApi";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useCallback } from "react";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function Movies({ onBurgerClick }) {
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [searchInfo, setSearchInfo] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);

  const filterMovies = useCallback((movies, isChecked, search) => {
    setSearchInfo(search);
    localStorage.setItem("searchform", JSON.stringify(search));
    localStorage.setItem("checkbox", JSON.stringify(isChecked));
    localStorage.setItem("allMovies", JSON.stringify(movies));
    setFilteredMovies(
      movies.filter((movie) => {
        const searchMovie =
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase());
        return isChecked
          ? searchMovie && movie.duration <= SHORT_FILM_DURATION
          : searchMovie;
      })
    );
  }, []);

  function searchMovies(search) {
    if (movies.length === 0) {
      moviesApi
        .getMovies()
        .then((dataMovies) => {
          setMovies(dataMovies);
          setIsChecked(false);
          setSearchError(false);
          filterMovies(dataMovies, isChecked, search);
        })
        .catch((err) => {
          setSearchError(true);
          console.log(`Ошибка: ${err}`);
        });
    } else {
      filterMovies(movies, isChecked, search);
    }
  }

  // useEffect(() => {
  //   if (
  //     localStorage.allMovies &&
  //     localStorage.checkbox &&
  //     localStorage.searchform
  //   ) {
  //     const movies = JSON.parse(localStorage.allMovies);
  //     const isChecked = JSON.parse(localStorage.checkbox);
  //     const search = JSON.parse(localStorage.searchform);
  //     setMovies(movies);
  //     setSearchInfo(search);
  //     setIsChecked(isChecked);
  //     setSearchError(false);
  //     filterMovies(movies, isChecked, search);
  //   }
  // }, [filterMovies]);

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm searchMovies={searchMovies}></SearchForm>
          <MoviesCardList movies={movies}></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;

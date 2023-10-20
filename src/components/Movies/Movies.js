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
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [searchInfo, setSearchInfo] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [searchError, setSearchError] = React.useState(false);

  function searchMovies() {
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        localStorage.setItem("allmovies", JSON.stringify(dataMovies));
        setAllMovies(dataMovies);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm searchMovies={searchMovies}></SearchForm>
          <MoviesCardList movies={allMovies}></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;

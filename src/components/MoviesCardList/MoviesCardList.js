import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import {
  MID_WIDTH_BREAKPOINT,
  MIN_WIDTH_BREAKPOINT,
  MAX_DISPLAY_QUANTITY,
  MID_DISPLAY_QUANTITY,
  MIN_DISPLAY_QUANTITY,
  MAX_ADD_QUANTITY,
  MIN_ADD_QUANTITY,
} from "../../utils/constants";

function MoviesCardList({
  movies,
  savedMovies,
  filteredSavedMovies,
  handleSaveMovie,
  handleMovieDelete,
}) {
  const [countMovies, setCountMovies] = React.useState("");
  const location = useLocation();

  // определяем, сколько карточек отобразить и сколько добавлять

  function displayMoviesCards() {
    const moviesCounter = {
      display: MAX_DISPLAY_QUANTITY,
      add: MAX_ADD_QUANTITY,
    };
    if (window.innerWidth < MID_WIDTH_BREAKPOINT) {
      moviesCounter.display = MID_DISPLAY_QUANTITY;
      moviesCounter.add = MAX_ADD_QUANTITY;
    }
    if (window.innerWidth < MIN_WIDTH_BREAKPOINT) {
      moviesCounter.display = MIN_DISPLAY_QUANTITY;
      moviesCounter.add = MIN_ADD_QUANTITY;
    }
    return moviesCounter;
  }

  // меняем количество карточек при изменении размера экрана

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setCountMovies(displayMoviesCards().display);
      function displayMoviesWhenResize() {
        if (window.innerWidth >= MID_WIDTH_BREAKPOINT) {
          setCountMovies(displayMoviesCards().display);
        }
        if (window.innerWidth < MID_WIDTH_BREAKPOINT) {
          setCountMovies(displayMoviesCards().display);
        }
        if (window.innerWidth < MIN_WIDTH_BREAKPOINT) {
          setCountMovies(displayMoviesCards().display);
        }
      }
      window.addEventListener("resize", displayMoviesWhenResize);
      return () =>
        window.removeEventListener("resize", displayMoviesWhenResize);
    }
  }, [location.pathname]);

  // кнопка добавления фильмов

  function handleClickOnButtonMore() {
    setCountMovies(countMovies + displayMoviesCards().add);
  }

  if (location.pathname === "/movies") {
    return (
      <section className="movies-list">
        <ul className="movies-list__container">
          {movies.length !== 0 ? (
            movies
              .slice(0, countMovies)
              .map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id || movie._id}
                  handleSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  handleMovieDelete={handleMovieDelete}
                />
              ))
          ) : (
            <p className="movies-list__error">Ничего не найдено</p>
          )}
        </ul>
        <button
          className={
            movies.length > countMovies
              ? "movies-list__button"
              : "movies-list__button-hidden"
          }
          onClick={handleClickOnButtonMore}
        >
          Ещё
        </button>
      </section>
    );
  }

  if (location.pathname === "/saved-movies") {
    return (
      <section className="movies-list">
        <ul className="movies-list__container">
          {filteredSavedMovies.length === 0 || !filteredSavedMovies ? (
            <p className="movies-list__error">Ничего не найдено</p>
          ) : (
            filteredSavedMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.id || movie._id}
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleMovieDelete={handleMovieDelete}
              />
            ))
          )}
        </ul>
      </section>
    );
  }
}

export default MoviesCardList;

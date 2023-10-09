import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies, onMovieClick, onMovieSave, onMovieDelete, savedMovies }) {
  const [moviesCards, setMoviesCards] = React.useState(0);
  const location = useLocation();

  function handleClickOnButtonMore() {
    if (window.innerWidth < 600) setMoviesCards(moviesCards + 2);
    else {
      setMoviesCards(moviesCards + 3);
    }
  }

  return (
    <section className="movies-list">
      <ul className="movies-list__container">
      {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onMovieClick={onMovieClick}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      <button className={
          location.pathname === "/movies"
            ? "movies-list__button"
            : "movies-list__button-hidden"
        } onClick={handleClickOnButtonMore}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;

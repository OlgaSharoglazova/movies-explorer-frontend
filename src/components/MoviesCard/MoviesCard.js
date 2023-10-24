import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { MIN_IN_HOUR, ONE_HOUR } from "../../utils/constants";

function MoviesCard({
  movie,
  onLike,
  handleSaveMovie,
  handleMovieDelete,
  savedMovies,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(false);

  function calculateDuration(duration) {
    const minutes = duration % MIN_IN_HOUR;
    const hours = (duration - minutes) / MIN_IN_HOUR;
    if (hours < ONE_HOUR) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  function onMovieDelete() {
    handleMovieDelete(movie);
  }

  function onLikeMovie() {
    handleSaveMovie(movie);
  }

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setIsLiked(savedMovies.some((item) => item.movieId === movie.id));
    }
  }, [savedMovies, location.pathname, movie.id, setIsLiked]);

  return (
    <li className="movies-card">
      <div className="movies-card__item">
        <a
          className="movies-card__link link"
          href={movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__image"
            src={
              location.pathname === "/movies"
                ? `https://api.nomoreparties.co/${movie.image.url}`
                : `${movie.image}`
            }
            alt={`Обложка ${movie.nameRu}`}
          ></img>
        </a>
        <div className="movies-card__description">
          <div className="movies-card__info">
            <h3 className="movies-card__title">{movie.nameRU}</h3>
            <p className="movies-card__duration">
              {calculateDuration(movie.duration)}
            </p>
          </div>
          {location.pathname === "/saved-movies" ? (
            <button
              type="button"
              className="movies-card__del"
              onClick={onMovieDelete}
            ></button>
          ) : isLiked ? (
            <button
              type="button"
              className="movies-card__active"
              onClick={onMovieDelete}
            ></button>
          ) : (
            <button
              type="button"
              className="movies-card__save"
              onClick={onLikeMovie}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;

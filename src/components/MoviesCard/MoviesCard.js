import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, isLiked, handleDelMovie, handleSaveMovie }) {
  const location = useLocation();

  function calculateDuration(duration) {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

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
            <h3 className="movies-card__title">{movie.nameRu}</h3>
            <p className="movies-card__duration">{calculateDuration(movie.duration)}</p>
          </div>
          {location.pathname === "/saved-movies" ? (
            <button type="button" className="movies-card__del" onClick={handleDelMovie}></button>
          ) : (
            isLiked ?
            <button type="button" className="movies-card__active" onClick={handleDelMovie}></button>
            :
            <button type="button" className="movies-card__save" onClick={handleSaveMovie}></button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;

import "./MoviesCard.css";
import image from "../../images/movie-image.jpg";

function MoviesCard() {
  return (
    <li className="movies-card">
      <div className="movies-card__item">
        <img
          className="movies-card__image"
          src={image}
          alt="Обложка фильма"
        ></img>
        <div className="movies-card__description">
          <div className="movies-card__info">
            <h3 className="movies-card__title">33 слова о дизайне</h3>
            <p className="movies-card__duration">1ч42м</p>
          </div>
          <input type="radio" className="movies-card__save"></input>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;

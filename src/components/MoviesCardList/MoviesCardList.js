import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </ul>
      <button className="movies-list__button movies-list__button-hidden">Ещё</button>
    </section>
  );
}

export default MoviesCardList;

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ onBurgerClick }) {
  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="movies">
        <section className="movies__container">
          <SearchForm></SearchForm>
          <MoviesCardList></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;

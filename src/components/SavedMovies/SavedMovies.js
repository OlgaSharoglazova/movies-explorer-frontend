import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ movies }) {
  return (
    <>
      <Header></Header>
      <main className="saved-movies">
        <section className="saved-movies__container">
          <SearchForm></SearchForm> 
          <MoviesCardList movies={movies} ></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;

import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header></Header>
      <main className="saved-movies">
        <section className="saved-movies__container">
          <SearchForm></SearchForm> 
          <MoviesCardList></MoviesCardList>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;

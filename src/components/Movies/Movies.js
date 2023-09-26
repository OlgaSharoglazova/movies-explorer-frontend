import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
    return (
      <main className="movies">
        <Header></Header>
        <section className="movies__container">
          <SearchForm></SearchForm>
          <MoviesCardList></MoviesCardList>
        </section>
        <Footer></Footer>
      </main>
    );
  }
  
  export default Movies;
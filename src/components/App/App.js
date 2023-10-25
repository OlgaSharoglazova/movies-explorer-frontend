import React from "react";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import * as auth from "../../utils/AuthApi";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFail, setIsFail] = React.useState(false);
  const [isChange, setIsChange] = React.useState(false);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoadding, setisLoadding] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem("savedmovies")) || []
  );
  const [allMovies, setAllMovies] = React.useState(
    JSON.parse(localStorage.getItem("allmovies")) || []
  );

  const navigate = useNavigate();
  const location = useLocation();

  // сохранение фильма

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setIsLiked(true);
        setSavedMovies([newMovie, ...savedMovies]);
        localStorage.setItem(
          "savedmovies",
          JSON.stringify([newMovie, ...savedMovies])
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  // удаление фильиа

  function handleMovieDelete(movie) {
    if (location.pathname === "/movies") {
      const removedMovie = savedMovies.find(
        (item) => item.movieId === movie.id
      );
      mainApi
        .deleteMovie(removedMovie._id)
        .then(() => {
          const newSavedMovies = savedMovies.filter(
            (savedMovie) => savedMovie.movieId !== removedMovie.movieId
          );
          setSavedMovies(newSavedMovies);
          localStorage.setItem("savedmovies", JSON.stringify(newSavedMovies));
          setIsLiked(false);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    } else {
      const removedMovie = savedMovies.find(
        (item) => item.movieId === movie.movieId
      );
      mainApi
        .deleteMovie(removedMovie._id)
        .then(() => {
          const newSavedMovies = savedMovies.filter(
            (savedMovie) => savedMovie.movieId !== movie.movieId
          );
          setSavedMovies(newSavedMovies);
          localStorage.setItem("savedmovies", JSON.stringify(newSavedMovies));
          setIsLiked(false);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  }

  // проверка токена

  const checkToken = () => {
    const token = localStorage.getItem("jwt");
    auth
      .checkToken(token)
      .then((data) => {
        if (!data) {
          return;
        }
        setUserData(data);
        setisLoggedIn(true);
        navigate(location.pathname);
      })
      .catch(() => {
        setisLoggedIn(false);
        setUserData({});
      })
      .finally(() => {
        setisLoadding(false);
      });
  };

  React.useEffect(() => {
    checkToken();
    //eslint-disable-next-line
  }, []);

  // открытие и закрытие меню навигации

  function handleBurgerClick() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  // регистрация

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        setIsSuccess(true);
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccess(false);
      });
  }

  // авторизация

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        navigate("/movies");
        setisLoggedIn(true);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  // выход из аккаунта

  function handleLogout() {
    setisLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate("/", { replace: true });
  }

  // получение данных пользователя
  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getProfile()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  // получение сохраненных фильмов

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getSavedMovies()
        .then((moviesData) => {
          localStorage.setItem("savedmovies", JSON.stringify(moviesData));
          setSavedMovies(moviesData);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  // получение всех фильмов

  function getAllMovies() {
    setisLoadding(true);
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        localStorage.setItem("allmovies", JSON.stringify(dataMovies));
        setAllMovies(dataMovies);
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setisLoadding(false);
      });
  }

  // обновление данных пользователя

  function handleUpdateUser(dataUser) {
    mainApi
      .editProfile(dataUser)
      .then((newData) => {
        setCurrentUser(newData);
        setIsChange(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsFail(true);
      });
  }

  return (
    <div className="page">
      {isLoadding ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Main
                    onBurgerClick={handleBurgerClick}
                    isLoggedIn={isLoggedIn}
                  />
                  <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <ProtectedRoute
                    element={Movies}
                    onBurgerClick={handleBurgerClick}
                    isLoggedIn={isLoggedIn}
                    getAllMovies={getAllMovies}
                    allMovies={allMovies}
                    savedMovies={savedMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleMovieDelete={handleMovieDelete}
                    isLiked={isLiked}
                  />
                  <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <ProtectedRoute
                    element={SavedMovies}
                    onBurgerClick={handleBurgerClick}
                    isLoggedIn={isLoggedIn}
                    handleSaveMovie={handleSaveMovie}
                    handleMovieDelete={handleMovieDelete}
                    savedMovies={savedMovies}
                  />
                  <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <ProtectedRoute
                    element={Profile}
                    onBurgerClick={handleBurgerClick}
                    onLogout={handleLogout}
                    isSuccess={isSuccess}
                    isFail={isFail}
                    isChange={isChange}
                    onUpdateUser={handleUpdateUser}
                    isLoggedIn={isLoggedIn}
                  />
                  <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
                </>
              }
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;

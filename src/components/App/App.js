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

function App() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);

  const navigate = useNavigate();
  const location = useLocation();

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
 
  // получение всех фильмов

  React.useEffect(() => {
    moviesApi
      .getMovies()
      .then(() => {
        setMovies(movies);
        localStorage.setItem("allMovies", JSON.stringify(movies));
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  });

  // получение данных пользователя
  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getProfile()
        .then((userdata) => {
          setCurrentUser(userdata);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  // обновление данных пользователя

  function handleUpdateUser(dataUser) {
    mainApi
      .editProfile(dataUser)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
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
                <Movies onBurgerClick={handleBurgerClick} movies={movies} />
                <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <SavedMovies
                  onBurgerClick={handleBurgerClick}
                  movies={movies}
                />
                <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Profile
                  onBurgerClick={handleBurgerClick}
                  onLogout={handleLogout}
                  isSuccess={isSuccess}
                  onUpdateUser={handleUpdateUser}
                />
                <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
              </>
            }
          />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

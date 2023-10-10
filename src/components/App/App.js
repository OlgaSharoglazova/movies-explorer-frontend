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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);

  const navigate = useNavigate();
  const location = useLocation();

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

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      Promise.all([mainApi.getProfile(), mainApi.getSavedMovies()])
        .then(([userdata, moviesdata]) => {
          setСurrentUser(userdata);
          setMovies(moviesdata);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  function handleBurgerClick() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        setIsSuccess(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccess(false);
      });
  }

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Main onBurgerClick={handleBurgerClick} />
              <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies onBurgerClick={handleBurgerClick} />
              <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies onBurgerClick={handleBurgerClick} movies={movies} />
              <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile onBurgerClick={handleBurgerClick} />
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

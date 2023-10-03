import React from "react";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function App() {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  function handleBurgerClick() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return (
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
              <SavedMovies onBurgerClick={handleBurgerClick} />
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
            />
            <Navigation isOpen={isMenuOpened} onClose={closeMenu} />
            </>
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

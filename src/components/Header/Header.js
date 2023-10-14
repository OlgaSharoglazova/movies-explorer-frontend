import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ onBurgerClick, isLoggedIn }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <header className="header header-main">
        <div className="header__container">
          <Link to={"/"} className="header__logo link">
            <img className="header__logo-icon" alt="Логотип" src={logo} />
          </Link>
          {isLoggedIn ? (
            <>
            <div className="header__nav">
              <div className="header__movie-links">
                <Link className="link header__main-link" to={"/movies"}>
                  Фильмы
                </Link>
                <Link className="link header__main-link" to={"/saved-movies"}>
                  Сохранённые фильмы
                </Link>
              </div>
              <Link className="link header__main-profile" to={"/profile"}>
                Аккаунт
              </Link>
            </div>
            <BurgerMenu onBurgerClick={onBurgerClick}/>
            </>
          ) : (
            <div className="header__menu">
              <Link className="header__signup link" to={"/signup"}>
                Регистрация
              </Link>
              <Link className="header__signin link" to={"/signin"}>
                Войти
              </Link>
            </div>
          )}
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__container">
          <Link to={"/"} className="header__logo link">
            <img className="header__logo-icon" alt="Логотип" src={logo} />
          </Link>
          <div className="header__nav">
            <div className="header__movie-links">
              <Link className="link header__link-movies" to={"/movies"}>
                Фильмы
              </Link>
              <Link className="link header__link-saved" to={"/saved-movies"}>
                Сохранённые фильмы
              </Link>
            </div>
            <Link className="link header__profile" to={"/profile"}>
              Аккаунт
            </Link>
          </div>
          <BurgerMenu onBurgerClick={onBurgerClick}/>
        </div>
      </header>
    );
  }
}

export default Header;

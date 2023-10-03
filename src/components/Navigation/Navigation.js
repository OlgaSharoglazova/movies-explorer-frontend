import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isBurgerMenuOpen = false;

  return (
    <div className={ isBurgerMenuOpen ? "navigation" : "navigation_hidden" }>
      <div className="navigation__container">
        <button className="navigation__close"></button>
        <div className="navigation__menu">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "navigation__link_active link"
                : "navigation__link link"
            }
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={
              location.pathname === "/movies"
                ? "navigation__link_active link"
                : "navigation__link link"
            }
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={
              location.pathname === "/saved-movies"
                ? "navigation__link_active"
                : "navigation__link"
            }
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="navigation__link-profile">Аккаунт</Link>
      </div>
    </div>
  );
}

export default Navigation;

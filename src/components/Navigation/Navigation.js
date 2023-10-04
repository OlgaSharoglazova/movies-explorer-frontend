import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isOpen, onClose }) {
  const location = useLocation();
  
  return (
    <div className={ isOpen ? "navigation navigation-opened" : "navigation" }>
      <div className="navigation__container">
        <button onClick={onClose} className="navigation__close" aria-label="Закрыть"></button>
        <div className="navigation__menu">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "navigation__link navigation__link_active link"
                : "navigation__link link"
            }
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={
              location.pathname === "/movies"
                ? "navigation__link navigation__link_active link"
                : "navigation__link link"
            }
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={
              location.pathname === "/saved-movies"
                ? "navigation__link navigation__link_active link"
                : "navigation__link link"
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

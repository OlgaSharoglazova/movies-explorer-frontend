import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <Link to="/" className="not-found__link link">
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;

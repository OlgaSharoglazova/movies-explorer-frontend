import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <section className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <Link
          className="not-found__link link"
          onClick={() => {
            navigate(-2);
          }}
        >
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;

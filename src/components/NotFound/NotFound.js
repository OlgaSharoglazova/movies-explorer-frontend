import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-3, { replace: true });
  }

  return (
    <main className="not-found">
      <section className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__button" onClick={navigateBack}>Назад</button>
      </section>
    </main>
  );
}

export default NotFound;

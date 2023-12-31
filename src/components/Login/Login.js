import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <section className="login__container">
        <Link to="/" className="login__logo-link link">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <span className="login__error"></span>
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <span className="login__error"></span>
          <button type="submit" className="login__button">
          Войти
          </button>
        </form>
        <p className="login__text">
        Еще не зарегистрированы?{" "}
          <Link className="login__link link" to="/signup">
          Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
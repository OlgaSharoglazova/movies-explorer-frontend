import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <main className="register">
      <section className="register__container">
        <Link to="/" className="register__logo-link link">
          <img className="register__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="register__error"></span>
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <span className="register__error"></span>
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <span className="register__error"></span>
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?{" "}
          <Link className="register__link link" to="/signin">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;

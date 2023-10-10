import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";
import { useFormWithValidation } from "../../utils/UseValidation";


function Login({ handleLogin }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (evt) => {

    evt.preventDefault();

    handleLogin({ email: values.email, password: values.password });
  };

  return (
    <main className="login">
      <section className="login__container">
        <Link to="/" className="login__logo-link link">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" noValidate
          onSubmit={handleSubmit}>
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            id="email"
            type="text"
            name="email"
            minLength={8}
            maxLength={40}
            placeholder="E-mail"
            required
            value={values.email}
            onChange={handleChange}
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          />
          <span className="login__error">{errors.email || ""}</span>
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            value={values.password}
            onChange={handleChange}
          />
          <span className="login__error">{errors.password || ""}</span>
          <button type="submit" disabled={!isValid} className="login__button">
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
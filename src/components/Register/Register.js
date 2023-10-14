import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/UseValidation";

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <main className="register">
      <section className="register__container">
        <Link to="/" className="register__logo-link link">
          <img className="register__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form name="register-form" className="register__form" noValidate onSubmit={handleSubmit}>
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
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="register__error">{errors.name || ""}</span>
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            id="email"
            type="text"
            name="email"
            placeholder="E-mail"
            required
            value={values.email || ""}
            onChange={handleChange}
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          />
          <span className="register__error">{errors.email || ""}</span>
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="register__error">{errors.password || ""}</span>
          <button
            type="submit"
            disabled={!isValid}
            className="register__button"
          >
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

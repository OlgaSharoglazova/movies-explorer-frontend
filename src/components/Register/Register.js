import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register({ handleRegister }) {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (evt) => {
    const { name, email, password } = formValue;

    evt.preventDefault();

    handleRegister(name, email, password);
  };

  return (
    <main className="register">
      <section className="register__container">
        <Link to="/" className="register__logo-link link">
          <img className="register__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate onSubmit={handleSubmit}>
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={30}
            value={formValue.name}
            onChange={handleChange}
            autoComplete="name"
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
            value={formValue.email}
            onChange={handleChange}
            autoComplete="email"
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
            minLength={6}
            maxLength={20}
            value={formValue.password}
            onChange={handleChange}
            autoComplete="new-password"
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

import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/UseValidation";

function Profile({ onUpdateUser, onLogout, onBurgerClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isChanged, setIsChanged] = React.useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  React.useEffect(() => {
    resetForm({ email: currentUser.email, name: currentUser.name }, {}, false);
  }, [currentUser, resetForm]);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
    setIsSuccess(true);
    setIsChanged(true);
  }

  return (
    <>
      <Header onBurgerClick={onBurgerClick}></Header>
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">{`Привет, ${
            currentUser.name || ""
          }!`}</h1>
          <form
            name="profile-form"
            className="profile__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset className="profile__fieldset">
              <div className="profile__input-container">
                <label className="profile__label">Имя</label>
                <input
                  className="profile__input"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                  minLength="2"
                  maxLength="30"
                  value={values.name || ""}
                  onChange={handleChange}
                  disabled={isEditing ? false : true}
                />
              </div>
              <span className="profile__error">{errors.name || ""}</span>
              <div className="profile__line"></div>
              <div className="profile__input-container">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={values.email || ""}
                  onChange={handleChange}
                  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                  disabled={isEditing ? false : true}
                />
              </div>
              <span className="profile__error">{errors.email || ""}</span>
            </fieldset>
            <div className="profile__actions">
              {isEditing ? (
                <div className="profile__submit">
                  {isSuccess ? (
                    <span
                      className={
                        isChanged
                          ? "profile__submit-result"
                          : "profile__submit-result_hidden"
                      }
                    >
                      Данные успешно изменены.
                    </span>
                  ) : (
                    <span
                      className={
                        isChanged
                          ? "profile__submit-result"
                          : "profile__submit-result_hidden"
                      }
                    >
                      При обновлении профиля произошла ошибка.
                    </span>
                  )}
                  <button
                    type="submit"
                    className="profile__submit-button button"
                    disabled={!isValid || (values.name === currentUser.name & values.email === currentUser.email)}
                  >
                    Сохранить
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="profile__edit button"
                    onClick={handleStartEditing}
                  >
                    Редактировать
                  </button>
                  <button
                    className="profile__sign-out button"
                    onClick={onLogout}
                  >
                    Выйти из аккаунта
                  </button>
                </>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;

import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header></Header>
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
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
              />
              <span className="profile__error"></span>
            </div>
            <div className="profile__input-container">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
              <span className="profile__error"></span>
            </div>
            <div className="profile__actions">
              <div className="profile__submit">
                <span className="profile__submit-error">
                  При обновлении профиля произошла ошибка.
                </span>
                <button type="submit" className="profile__submit-button button">
                  Сохранить
                </button>
              </div>
              <button className="profile__edit button">Редактировать</button>
              <button className="profile__sign-out button">Выйти из аккаунта</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;

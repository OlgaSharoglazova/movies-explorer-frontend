import photo from "../../images/photo.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__content-info">
            <h3 className="about-me__content-title">Ольга</h3>
            <p className="about-me__content-subtitle">
              Фронтенд-разработчик, 37 лет
            </p>
            <p className="about-me__content-text">
              Я живу в Иркутске. У меня есть муж и сын. Я люблю читать
              детективы, а ещё практикую цигун. В декрете увлеклась кодом.
              Прохожу курс по веб-разработке от Яндекс.Практикума.
            </p>
            <a
              className="about-me__content-link link"
              href="https://github.com/OlgaSharoglazova"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="about-me__img" src={photo} alt="Фото Ольги" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

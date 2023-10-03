import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__column">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__visual">
          <div className="about-project__visual-cell_first">
            <p className="about-project__visual-title">1 неделя</p>
          </div>
          <div className="about-project__visual-cell_second">
            <p className="about-project__visual-title">4 недели</p>
          </div>
          <p className="about-project__visual-text">Back-end</p>
          <p className="about-project__visual-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

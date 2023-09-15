function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a
            className="portfolio__link link"
            href="https://github.com/OlgaSharoglazova/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-arrow">&#x2197;</p>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a
            className="portfolio__link link"
            href="https://github.com/OlgaSharoglazova/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-arrow">&#x2197;</p>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a
            className="portfolio__link link"
            href="https://bsk.nomoreparties.co"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-arrow">&#x2197;</p>
          </a>
        </li>
      </ul>
      </div>
      
    </div>
  );
}

export default Portfolio;

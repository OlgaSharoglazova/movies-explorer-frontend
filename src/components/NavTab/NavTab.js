function NavTab() {
  
    return (
      <section className="nav-tab">
        <ul className="nav-tab__anchors" >
            <li>
              <a className="nav-tab__anchor link" href="#about-project">О проекте</a>
            </li>
            <li>
              <a className="nav-tab__anchor link" href="#techs">Технологии</a>
            </li>
            <li>
              <a className="nav-tab__anchor link" href="#about-me">Студент</a>
            </li>
        </ul>
      </section>
    );
  }
  
  export default NavTab;
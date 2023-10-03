import "./Navigation.css";
import { useLocation } from "react-router-dom";

function Navigation({ onBurgerClick }) {
  const location = useLocation();

  return (
    <div className="navigation">
      <button
        className={
          location.pathname === "/"
            ? "navigation__main-burger"
            : "navigation__burger"
        }
        onClick={onBurgerClick}
      ></button>
    </div>
  );
}

export default Navigation;

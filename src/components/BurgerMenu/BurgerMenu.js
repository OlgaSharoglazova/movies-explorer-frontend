import "./BurgerMenu.css";
import { useLocation } from "react-router-dom";

function BurgerMenu({ onBurgerClick }) {
  const location = useLocation();

  return (
    <div className="menu">
      <button
        className={
          location.pathname === "/"
            ? "menu__burger-main"
            : "menu__burger"
        }
        onClick={onBurgerClick}
      ></button>
    </div>
  );
}

export default BurgerMenu;
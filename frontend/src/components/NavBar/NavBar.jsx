import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { StoreContext } from "../../context/StoreContext";
export default function NavBar({ setLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>YumYard</h2>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-rigth">
        <img className="searchicon" src={assets.search_icon} alt="icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img className="bag" src={assets.bag_icon} alt="bag" />
            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        <button onClick={() => setLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

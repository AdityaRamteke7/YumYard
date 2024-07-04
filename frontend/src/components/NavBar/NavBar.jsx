import { useState } from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";
export default function NavBar() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
     <h2>YumYard</h2>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-rigth">
        <img className="searchicon" src={assets.search_icon} alt="icon" />
        <div className="navbar-search-icon">
          <img className="bag" src={assets.bag_icon} alt="bag" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

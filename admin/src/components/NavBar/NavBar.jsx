import "./NavBar.css";
import { assets } from "../../assets/assets";
const NavBar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">YumYard Admin Panel</h2>
      <img className="profile" src={assets.profile_image} alt="Profile image" />
    </div>
  );
};

export default NavBar;

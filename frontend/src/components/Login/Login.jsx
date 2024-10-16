import { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function Login({ setLogin }) {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [currLogin, setCurrLogin] = useState("Sign Up");
  const { url, setToken } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault(); // Corrected typo
    let newUrl = url;
    if (currLogin === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        // Corrected typo
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-title">
          <h2>{currLogin}</h2>
          <img
            onClick={() => setLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup">
          {currLogin === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit">
          {currLogin === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currLogin === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrLogin("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrLogin("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;

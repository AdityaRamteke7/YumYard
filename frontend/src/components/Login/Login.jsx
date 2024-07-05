import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
function Login({ setLogin }) {
  const [currLogin, setCurrLogin] = useState("Sign Up");
  return (
    <div className="login">
      <form className="login-popup-container">
        <div className="login-title">
          <h2>{currLogin}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup">
          {currLogin === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your password" required />
          <input type="password" placeholder=" password" required />
        </div>
        <button>{currLogin === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms of use & privacy policy.</p>
        </div>
        {currLogin === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrLogin("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have a an account ?
            <span onClick={() => setCurrLogin("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;

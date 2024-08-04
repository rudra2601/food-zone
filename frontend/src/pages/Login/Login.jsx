import React, { useContext, useState } from "react";
import cross_icon from "./cross_icon.jpg";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login">
      <form required onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By contionuing, i agree to the termsnof use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            ALready have an account?
            <span onClick={() => setcurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
/*import React, { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { url, token, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [resetEmail, setResetEmail] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/user/login`;
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onRegister = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/user/register`;
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onForgotPassword = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/user/reset-password`;
    try {
      const response = await axios.post(newUrl, {
        email: resetEmail,
      });
      if (response.data.success) {
        alert("Password reset link sent to your email.");
        setCurrState("Login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error occurred during password reset:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login">
      {currState === "ForgotPassword" ? (
        <form onSubmit={onForgotPassword} className="login-container">
          <div className="login-title">
            <h2>Reset Password</h2>
            <button onClick={() => setShowLogin(false)} className="close-btn">
              ✕
            </button>
          </div>
          <div className="inputs">
            <input
              name="resetEmail"
              onChange={(event) => setResetEmail(event.target.value)}
              value={resetEmail}
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <button type="submit">Send Reset Link</button>
          <p>
            Remembered your password?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        </form>
      ) : (
        <form
          onSubmit={currState === "Login" ? onLogin : onRegister}
          className="login-container"
        >
          <div className="login-title">
            <h2>{currState}</h2>
            <button onClick={() => setShowLogin(false)} className="close-btn">
              ✕
            </button>
          </div>
          <div className="inputs">
            {currState === "Login" ? null : (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your name"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          {currState === "Login" ? (
            <p>
              Create a new Account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
          {currState === "Login" && (
            <p className="forgot-password">
              Forgot your password?{" "}
              <span onClick={() => setCurrState("ForgotPassword")}>
                Click here
              </span>
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;*/

import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import cart from "./cart.jpg";
import profile from "./profile.jpg";
import shoppingbag from "./shoppingbag.jpg";
import logout_icon from "./logout_icon.jpg";
import { StoreContext } from "../Context/StoreContext";
import "./Navbar.css";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  //const [items, setmenu] = useState("items");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <p className="logo fs-1">FoodZone</p>
      <ul className="navbar-menu">
        <Link
          to="/Home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/Items"
          onClick={() => setMenu("Our Menu")}
          className={menu === "Our Menu" ? "active" : ""}
        >
          Our Menu
        </Link>
        <Link
          to="/Contact_Us"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-icon">
          <Link to="/Cart">
            <img src={cart} alt="" className="cart" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={profile} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/MyOrders")}>
                <img src={shoppingbag} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={logout_icon} alt="" />
                <p>Log out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
/*<div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/Home">
            FoodApp
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li onClick={() => setmenu("Home")} className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Items">
                  Our_menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact_Us">
                  Contact_Us
                </Link>
              </li>
              <li className="nav-item-cart">
                <Link className="nav-link" to="/Cart">
                  <img src={cart} style={{ height: "35px" }} alt="" />
                </Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
              </li>
              {!token?<button onClick={() => setShowLogin(true)}>sign in</button>
              :<div className='navbar-profile'>
                <img src={profile} style={{ height: "38px" }} alt="" />
                <ul className="nav-profile-dropdown">
                  <li><img src={shoppingbag} alt="" /> </li>
                  <hr />
                  <li><img src={logout} alt="" /> </li>
                </ul>
                </div>}
            </ul>
          </div>
        </div>
      </nav>
    </div>*/

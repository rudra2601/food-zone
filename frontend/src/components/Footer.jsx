import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/Home" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Items" className="nav-link px-2 text-muted">
              Items
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact_US" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2024 FoodApp, Inc</p>
      </footer>
    </div>
  );
}

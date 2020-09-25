import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      Logo
    </Link>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/logout" className="nav__link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

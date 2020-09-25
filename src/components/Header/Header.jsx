import React from "react";

const Header = () => (
  <header>
    <a href="/" className="logo">
      Logo
    </a>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Home
          </a>
        </li>
        <a href="/logout" className="nav__link">
          Log out
        </a>
      </ul>
    </nav>
  </header>
);

export default Header;

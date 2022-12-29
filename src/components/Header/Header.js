import React, { useState } from "react";
import logo from "../../images/logo.png";
import snowImg from "../../images/snow-img.png";
import "./Header.css";

function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const [bgHeader, setBgHeader] = useState(false);

  const navToggleHandler = () => {
    setNavToggle(true);
  };

  const navCloseHandler = () => {
    setNavClose(true);
    setNavToggle(false);
  };

  const changeBg = () => {
    window.scrollY >= 50 ? setBgHeader(true) : setBgHeader(false);
  };

  window.addEventListener("scroll", changeBg);

  return (
    <header className={`header ${bgHeader && "fade-in"}`} id="header">
      <nav className="nav container">
        <a href="/" className="nav__link nav__logo">
          <img src={logo} alt="logo" />
          Christmas
        </a>
        <div className={`nav__menu ${navToggle && "show__menu"}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={navCloseHandler}>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={navCloseHandler}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#send" className="nav__link" onClick={navCloseHandler}>
                Send
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#celebrate"
                className="nav__link"
                onClick={navCloseHandler}
              >
                Celebrate
              </a>
            </li>
          </ul>
          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={navCloseHandler}>
            <i class="ri-close-line"></i>
          </div>

          <img src={snowImg} alt="snow" className="nav__img-1" />
          <img src={snowImg} alt="snow" className="nav__img-2" />
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={navToggleHandler}>
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;

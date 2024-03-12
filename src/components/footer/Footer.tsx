import React, { useEffect } from "react";
import Social from "../social/Social";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className=" footer__sec-container">
        <div className="container footer__container">
          <div className="logo">
            <a href="#">AndreyValyuk</a>
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">Main Page</li>
            <li className="footer__list-item">
              <a href="#main" className="link">
                Main
              </a>{" "}
            </li>
            <li className="footer__list-item">
              <a href="#about" className="link">
                About
              </a>{" "}
            </li>
            <li className="footer__list-item">
              {" "}
              <a href="#skills" className="link">
                Skills
              </a>
            </li>
            <li className="footer__list-item">
              {" "}
              <a href="#blogs" className="link">
                Blogs
              </a>
            </li>
            <li className="footer__list-item">
              {" "}
              <a href="#experience" className="link">
                Experience
              </a>
            </li>
            <li className="footer__list-item">
              {" "}
              <a href="#services" className="link">
                Services
              </a>
            </li>
            <li className="footer__list-item">
              {" "}
              <a href="#faq" className="link">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list-item">Services Page</li>
            <li className="footer__list-item">Первая</li>
            <li className="footer__list-item">Вторая</li>
            <li className="footer__list-item">Третья</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list-item">Website promotion</li>
            <li className="footer__list-item">Первая</li>
            <li className="footer__list-item">Вторая</li>
            <li className="footer__list-item">Третья</li>
            <li className="footer__list-item">Четвертая</li>
            <li className="footer__list-item">Пятая</li>
            <li className="footer__list-item">Шестая</li>
          </ul>
          <div className="footer__box">
            <div className="footer__box-item">
              <i className="bx bx-envelope"></i>
              <a
                className="footer__box-text"
                href="mailto:andreii.rubik@mail.ru"
              >
                andreii.rubik@mail.ru
              </a>
            </div>
            <div className="footer__box-item">
              <i className="bx bxl-github"></i>
              <a
                className="footer__box-text"
                href="https://github.com/Kamatochy04"
              >
                camatocy04
              </a>
            </div>
            <div className="footer__box-item">
              <i className="bx bx-phone"></i>
              <a className="footer__box-text" href="tel:+375333835957">
                +375 33 383 59 57
              </a>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

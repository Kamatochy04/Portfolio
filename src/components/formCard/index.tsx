import React from "react";

import "./index.scss";
import H2 from "../../shared/h2/H2";
import H3 from "../../shared/h3/H3";

export const FormCard = () => {
  return (
    <div className="formCard">
      <H3 text={"Some Title"} />
      <p className="formCard__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos commodi
        accusantium et necessitatibus rerum dicta. Accusamus ipsam blanditiis
        molestias. Ea qui consectetur similique, suscipit repellat minus soluta
        excepturi quam perspiciatis?
      </p>
      <div className="formCard__media">
        <a href="https://twitter.com/Andrei55311">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://www.instagram.com/andrey__val_/">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/andrey-valiuk-7ba4762a1/">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://web.telegram.org/a/">
          <i className="bx bxl-telegram"></i>
        </a>
      </div>
      <span>OR</span>
      <div className="formCard__media">
        <div className="footer__box-item">
          <i className="bx bx-envelope"></i>
          <a className="footer__box-text" href="mailto:andreii.rubik@mail.ru">
            andreii.rubik@mail.ru
          </a>
        </div>

        <div className="footer__box-item">
          <i className="bx bx-phone"></i>
          <a className="footer__box-text" href="tel:+375333835957">
            +375 33 383 59 57
          </a>
        </div>
      </div>
    </div>
  );
};

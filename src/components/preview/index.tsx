import React, { useEffect } from "react";
import Container from "../container/Container";
import AOS from "aos";

import Button from "../../shared/button/Button";
import Tab from "../tab";
import Buttons from "../buttons/Buttons";

import "./index.scss";

type Props = {
  title: string;
  text: string;
  price: string;
};

export const Preview = ({ title, text, price }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="preview"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <Container>
        <div className="preview__box">
          <div className="preview__container">
            <h2 className="preview__h2">{title}</h2>
            <p className="preview__text">{text}</p>

            <h3 className="preview__price">
              Price: from {price} <span>$</span>
            </h3>
            <Buttons
              className="about__buttons"
              buttonText1="Skills"
              buttonText2="Contact"
              href="#skills"
              href2="#footer"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

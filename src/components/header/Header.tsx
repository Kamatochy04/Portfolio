import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

import HeaderNav from "./UI/HeaderNav";

import "./header.scss";

interface IHeader {
  headerLinksName: string[];
}

const Header = ({ headerLinksName }: IHeader) => {
  const [list, setList] = useState(false);

  let listClass;
  let burgerClass;
  let underListClass;

  useEffect(() => {
    AOS.init();
  }, []);

  if (list) {
    underListClass = " header__under-list header__under-list-active";
    listClass = "header__list header__list-active";
    burgerClass = "header__burger header__burger-active";
  } else {
    underListClass = "header__under-list";
    listClass = "header__list";
    burgerClass = "header__burger";
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__container ">
          <div className="logo">
            <a href="#" data-aos="zoom-in" data-aos-duration="300">
              AndreyValyuk
            </a>
          </div>
          <HeaderNav
            headerLinkName={headerLinksName}
            headerListDurationClass="header__nav-display"
          />
          <div className={burgerClass} onClick={() => setList(!list)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={underListClass}></div>
          <div className={listClass}>
            <HeaderNav
              headerLinkName={headerLinksName}
              headerListDurationClass="header__list-list"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

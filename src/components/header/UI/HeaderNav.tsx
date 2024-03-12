import React, { ReactNode, useEffect } from "react";

interface IHeaderNav {
  headerLinkName: string[];
  headerListDurationClass?: string;
}

const HeaderNav = ({ headerLinkName, headerListDurationClass }: IHeaderNav) => {
  const setHeaderLinkName = () => {
    return headerLinkName.map((link, index) => (
      <li
        key={index}
        className="header__item"
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <a className="link" href={"#" + link}>
          {link}
        </a>
      </li>
    ));
  };

  return (
    <nav className={`header__nav  ${headerListDurationClass} `}>
      {setHeaderLinkName()}
    </nav>
  );
};

export default HeaderNav;

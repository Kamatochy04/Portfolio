import React, { useEffect } from "react";

import AOS from "aos";

import "./button.scss";

type IButton = {
  text: string | undefined;
  bg?: boolean;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
};

const Button = ({
  text,
  bg,
  dataAos,
  dataAosDuration,
  dataAosDelay,
}: IButton) => {
  useEffect(() => {
    AOS.init();
  }, []);

  let classButton: string = "button";
  if (bg) {
    classButton += " button-2";
  }

  return (
    <button
      className={classButton}
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      {text}
    </button>
  );
};

export default Button;

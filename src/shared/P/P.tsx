import React, { useEffect } from "react";
import AOS from "aos";

import "./text.scss";

interface IText {
  text: string;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
  className?: string;
}

const P = ({
  text,
  dataAos,
  dataAosDuration,
  dataAosDelay,
  className,
}: IText) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <p
      className={className}
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      {text}
    </p>
  );
};

export default P;

import React from "react";

import "./h1.scss";

interface IH1 {
  text: string;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
}

const H1 = ({ text, dataAos, dataAosDuration, dataAosDelay }: IH1) => {
  return (
    <h1
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      {text}
    </h1>
  );
};

export default H1;

import React, { useEffect } from "react";
import AOS from "aos";

import "./h2.scss";

interface Ititle {
  text: string;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
}

const H2 = ({ text, dataAos, dataAosDuration, dataAosDelay }: Ititle) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <h2
      className="title"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      {text}
    </h2>
  );
};

export default H2;

import React from "react";

import "./h3.scss";

interface Ititle {
  text: string;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
}

const H3 = ({ text, dataAos, dataAosDuration, dataAosDelay }: Ititle) => {
  return (
    <h3
      className="h3"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      {text}
    </h3>
  );
};

export default H3;

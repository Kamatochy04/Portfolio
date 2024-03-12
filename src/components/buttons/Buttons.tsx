import React, { useEffect } from "react";
import Button from "../../shared/button/Button";
import AOS from "aos";

import "./buttons.scss";

type Props = {
  className?: string | undefined;
  buttonText1?: string | undefined;
  buttonText2?: string | undefined;
  href?: string;
  href2?: string;
  isDownload1?: boolean | false;
};

const Buttons = ({
  className,
  buttonText1,
  buttonText2,
  href,
  href2,
  isDownload1,
}: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`buttons ${className}`}>
      <a
        href={href}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="link"
      >
        <Button text={buttonText1} bg />
      </a>
      <a
        href={href2}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
        className="link"
      >
        <Button text={buttonText2} />
      </a>
    </div>
  );
};

export default Buttons;

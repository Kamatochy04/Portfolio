import React, { useEffect } from "react";
import AOS from "aos";

import "./skillsCard.scss";

const SkillsKard = ({
  text,
  iconClass,
  spanClass,
  dataAos,
  dataAosDuration,
  dataAosDelay,
  className,
}: {
  text: string;
  iconClass: string;
  spanClass: string;
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
  className?: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="skills__card"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      <span className={spanClass}>
        <i className={iconClass}></i>
        <p>{text}</p>
      </span>
    </div>
  );
};

export default SkillsKard;

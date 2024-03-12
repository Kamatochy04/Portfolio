import React from "react";

import "./index.css";

type Props = {
  name: string;
  items: string[];
};

const SkillsBox = ({ name, items }: Props) => {
  return (
    <div className="box" data-aos="flip-left" data-aos-duration="1500">
      <h4 className="box__h4">{name}</h4>
      <div className="box__wrapper">
        {items.map((item, id) => {
          return (
            <span
              key={id}
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay={`${id * 300}`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsBox;

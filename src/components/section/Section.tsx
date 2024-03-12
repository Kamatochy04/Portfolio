import React from "react";

import "./section.scss";

const Section = ({
  children,
  className,
  id,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default Section;

import React from "react";

import "./flexContainer.scss";

const FlexContainer = ({
  children,
  className,
}: {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export default FlexContainer;

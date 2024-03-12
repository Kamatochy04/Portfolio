import React from "react";

import "./index.scss";

type Props = { placeholder?: string };

export const Input = ({ placeholder }: Props) => {
  return <input placeholder={placeholder} type="text" className="input" />;
};

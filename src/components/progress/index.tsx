import React from "react";
import { Progress as SercleProgress } from "antd";

import "./index.scss";

type Props = {
  percent: number | undefined;
};

const Progress = ({ percent }: { percent: number }) => {
  return (
    <SercleProgress
      type="dashboard"
      strokeWidth={10}
      percent={percent}
      className="progress"
      strokeColor="#00e1ff"
      size={150}
      trailColor="#423d3dc7"
    />
  );
};

export default Progress;

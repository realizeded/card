import React from "react";
import { ICommonRenderProps } from "../../types/common";
import $style from "./style.module.less";

export const Text: React.FC<ICommonRenderProps> = ({ project }) => {
  const style = project.style;
  const text = project?.data?.text || "";
  return (
    <div className={$style.wrapper} style={style}>
      {text}
    </div>
  );
};

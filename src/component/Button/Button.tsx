import React from "react";
import { ICommonRenderProps } from "../../types/common";
import $style from "./style.module.less";

export const Button: React.FC<ICommonRenderProps> = ({ project }) => {
  const style = project.style;

  const newStyle = {
    background: `url(${style.background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return <div className={$style.wrapper} style={newStyle}></div>;
};
